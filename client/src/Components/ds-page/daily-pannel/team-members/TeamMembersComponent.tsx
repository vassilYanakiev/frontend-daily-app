import { Button, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState, useContext } from "react";
import TeamMemberCardComponent from "./TeamMemberCardComponent";
import { ParticipantsContext } from "../../../../context-Participants";

const sxButton = {
  backgroundColor: "lightblue",
  border: "2px solid #4d779e",
  "&:hover": {
    backgroundColor: "#636396",
    color: "white",
  },
  height: "42px",
  margin: "12px 16px 0px 0px",
};

const TeamMembersComponent = () => {
  const {
    state: { participants, activeParticipant, invalidateCache, timerStarted },
    dispatch,
  } = useContext(ParticipantsContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [errorFetching, setErrorFetching] = useState(false);
  const [teamMembersKey, setTeamMembersKey] = useState(0);

  const handleShuffle = () => {
    setTeamMembersKey(teamMembersKey + 1);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    console.log("useEffect, []");
    const fetchParticipants = async function () {
      await fetch("http://localhost:4001/api/v1/team-members?teamId=C")
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("HTTP error " + resp.status);
          }
          return resp.json();
        })
        .then((payload) => {
          dispatch({
            type: "FETCH_PARTICIPANTS",
            payload,
          });
          setLoading(false);
        });
    };

    if (!participants.length || invalidateCache) {
      setLoading(true);
      try {
        fetchParticipants();
      } catch (error) {
        console.log(error);
        setErrorFetching(true);
      } finally {
        dispatch({ type: "INVALIDATE_CACHE", payload: false });
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (!participants.length || teamMembersKey === 0) return;
    dispatch({
      type: "REORDER_PARTICIPANTS",
    });
  }, [teamMembersKey, participants]);

  const handleStart = () => {
    dispatch({
      type: "SET_ACTIVE_PARTICIPANT",
      payload: participants[0] || null,
    });
  };

  const handlePersonSelect = (direction: "previous" | "next") => () => {
    const activeParticipantIndex = participants.findIndex(
      (participant) => participant.id === activeParticipant?.id
    );

    let newActiveParticipantIndex = 0;

    if (direction === "previous") {
      newActiveParticipantIndex = activeParticipantIndex
        ? activeParticipantIndex - 1
        : participants.length - 1;
    } else {
      newActiveParticipantIndex =
        activeParticipantIndex === participants.length - 1 ||
        activeParticipant === null
          ? 0
          : activeParticipantIndex + 1;
    }
    dispatch({
      type: "SET_ACTIVE_PARTICIPANT",
      payload: participants[newActiveParticipantIndex] || null,
    });
  };

  if (errorFetching) throw new Error("Error fetching team members");
  if (!participants.length) return <div>Loading participants list...</div>;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>Team Members</h2>
          <Button
            variant="outlined"
            sx={sxButton}
            autoFocus
            onClick={handleShuffle}
          >
            Shuffle
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "center",
          }}
        >
          <Button
            disabled={timerStarted}
            sx={{
              border: "3px solid #4d779e",
              color: "white",
              height: "32px",
              marginRight: "8px",
            }}
            onClick={handleStart}
          >
            First
          </Button>
          <Button
            sx={{
              border: "3px solid #4d779e",
              color: "white",
              height: "32px",
              marginRight: "8px",
            }}
            onClick={handlePersonSelect("previous")}
          >
            Previous
          </Button>
          <Button
            sx={{
              border: "3px solid #4d779e",
              color: "white",
              height: "32px",
            }}
            onClick={handlePersonSelect("next")}
          >
            Next
          </Button>
        </Box>
      </Box>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          {participants.map((teamMember) => (
            <TeamMemberCardComponent
              key={teamMember.id}
              teamMember={teamMember}
              selected={teamMember.id === activeParticipant?.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TeamMembersComponent;
