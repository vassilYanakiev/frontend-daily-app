import { useEffect, useState } from "react";
import TeamMemberCardComponent from "./TeamMemberCardComponent";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TeamMembersComponent = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
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
      .then((teamMembers) => {
        setTeamMembers(teamMembers);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorFetching(true);
      });
  }, []);

  if (errorFetching) throw new Error("Error fetching team members");

  return (
    <div className="team-members">
      <h1>Team Members</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="team-members-list">
          {teamMembers.map((teamMember) => (
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
