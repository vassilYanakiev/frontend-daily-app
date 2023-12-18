import { useEffect, useState, useReducer } from "react";
import TeamMemberCardComponent from "./TeamMemberCardComponent";
import { reducer, initialState } from "../../reducer";

const TeamMembersComponent = () => {
  const [{ participants }, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorFetching, setErrorFetching] = useState(false);

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
    <div className="team-members">
      <h2>Daily Standup Board</h2>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="team-members-list">
          {participants.map((teamMember) => (
            <TeamMemberCardComponent
              key={teamMember.id}
              teamMember={teamMember}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamMembersComponent;
