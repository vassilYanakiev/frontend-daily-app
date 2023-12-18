import { Container, Box, Grid, Button, Input } from "@mui/material";
import Header from "./Components/header-component/Header";
import TeamMembersComponent from "./Components/team-members/TeamMembersComponent";
import EntryInput from "./Components/EntryInput";

const sxButton = {
  backgroundColor: "lightblue",
  border: "2px solid #4d779e",
  "&:hover": {
    backgroundColor: "#636396",
    color: "white",
  },
};

function App() {
  return (
    <Container sx={{ padding: "0px" }}>
      <Header />
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          style={{
            minHeight: "80vh",
            backgroundColor: "#409f99",
            border: "2px solid #4d779e",
            borderRadius: "10px",
          }}
        >
          <Grid item sx={{ backgroundColor: "#409f99" }}>
            <TeamMembersComponent />
          </Grid>
          <Grid item sx={{ backgroundColor: "#88a9a7" }}>
            <EntryInput entryLabel="Add participant" />
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", justifyContent: "center", p: 1, m: 1 }}>
              <Button variant="outlined" sx={sxButton} autoFocus>
                Shuffle
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
