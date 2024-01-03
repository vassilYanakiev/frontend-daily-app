import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

interface Team {
  id: string;
  team_name: string;
}

const TeamsComponent = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("");

  const handleOpen = (team: Team) => {
    setSelectedTeam(team);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:4001/api/v1/team-members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        role,
        team_id: selectedTeam?.team_name,
      }),
    });

    if (!response.ok) {
      alert("Failed to add team member");
    }
    setOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:4001/api/v1/teams")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("HTTP error " + resp.status);
        }
        return resp.json();
      })
      .then((payload) => {
        setTeams(payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {teams.length
        ? teams.map((team) => (
            <Card
              key={team.id}
              sx={{
                backgroundColor: "#acccd4",
                marginBottom: "1rem",
                width: "320px",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  {`Team ${team.team_name}`}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpen(team)}
                >
                  Add New
                </Button>
              </CardContent>
            </Card>
          ))
        : null}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Add Team Member to Team {selectedTeam?.team_name}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            fullWidth
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="surname"
            label="User Surname"
            type="text"
            fullWidth
            required
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="role"
            label="User Role"
            type="text"
            fullWidth
            required
            onChange={(e) => setRole(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TeamsComponent;
