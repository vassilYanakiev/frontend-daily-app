import { Card, CardContent, Typography } from "@mui/material";

interface TeamMember {
  name: string;
  surname: string;
  role: string;
  availability: string;
  assignedJiraCard: string;
}

interface TeamMemberPanelProps {
  teamMember: TeamMember;
}

const TeamMemberPanel: React.FC<TeamMemberPanelProps> = ({ teamMember }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {teamMember.name} {teamMember.surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Role: {teamMember.role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {teamMember.availability}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Assigned Jira Card: {teamMember.assignedJiraCard}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMemberPanel;
