import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TeamMember {
  id: string;
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
    <>
      <Card>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 2,
            }}
          >
            <CountdownCircleTimer
              key={teamMember.id}
              size={120}
              isPlaying
              duration={120}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[120, 30, 2, 0]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </Box>
        </Box>
      </Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Active Tickets:</h3>
      </div>
      <Card
        sx={{
          minHeight: 250,
          margin: 4,
          backgroundColor: "#b2b2cd",
          justifyContent: "space-evenly",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Create new react component
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: In Progress
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Assignee: Unassigned
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Story Points: 1
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Jira Card</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default TeamMemberPanel;
