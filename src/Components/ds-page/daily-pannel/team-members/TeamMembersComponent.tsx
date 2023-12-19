import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState, useReducer } from "react";
import TeamMemberCardComponent from "./TeamMemberCardComponent";
import { reducer, initialState } from "../../../../reducer";

const TeamMembersComponent = () => {
  const [{ participants }, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorFetching, setErrorFetching] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetch("src/data/team-members.json")
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
      })
      .catch((error) => {
        console.log(error);
        setErrorFetching(true);
      });
  }, []);

  if (errorFetching) throw new Error("Error fetching team members");
  if (!participants.length) return <div>Loading participants list...</div>;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <h2>Team Members</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              border: "2px solid",
              color: "black",
              height: "32px",
              marginTop: "16px",
              marginRight: "8px",
            }}
          >
            Previous
          </Button>
          <Button
            sx={{
              border: "2px solid",
              color: "black",
              height: "32px",
              marginTop: "16px",
              marginRight: "8px",
            }}
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
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TeamMembersComponent;
