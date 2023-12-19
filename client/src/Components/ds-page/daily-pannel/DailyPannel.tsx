import { AppBar, Box, Button, Container, Grid } from "@mui/material";
import EntryInput from "../../EntryInput";
import TeamMembersComponent from "./team-members/TeamMembersComponent";

const sxButton = {
  backgroundColor: "lightblue",
  border: "2px solid #4d779e",
  "&:hover": {
    backgroundColor: "#636396",
    color: "white",
  },
};
interface TeamMember {
  name: string;
  surname: string;
  role: string;
  availability: string;
  assignedJiraCard: string;
}

const DailyPannel = () => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        style={{
          backgroundColor: "#409f99",
          border: "2px solid #4d779e",
          borderRadius: "14px 0px 0px 14px",
          overflow: "auto",
        }}
      >
        <Grid>
          <TeamMembersComponent />
        </Grid>
        {/* <Grid item sx={{ backgroundColor: "#88a9a7" }}>
          <EntryInput entryLabel="Add participant" />
        </Grid> */}
        {/* <Grid item>
          <Box sx={{ display: "flex", justifyContent: "center", p: 1, m: 1 }}>
            <Button variant="outlined" sx={sxButton} autoFocus>
              Shuffle
            </Button>
          </Box>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default DailyPannel;
