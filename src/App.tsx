import { Container, Grid } from "@mui/material";
import Header from "./Components/header-component/Header";
import Footer from "./Components/footer/Footer";
import DailyPannel from "./Components/ds-page/daily-pannel/DailyPannel";
import TeamMemberPannelComponent from "./Components/ds-page/daily-pannel/TeamMemberPannelComponent";

const teamMember = {
  name: "John",
  surname: "Doe",
  role: "Developer",
  availability: "100%",
  assignedJiraCard: "JIRA-123",
};

function App() {
  return (
    <Container
      sx={{
        padding: "0px",
        height: "96vh",
        overflow: "hidden",
      }}
    >
      <Header />
      <Grid container xs={12} sx={{ height: "80%" }}>
        <Grid xs={6} sx={{ height: "97%", overflow: "overlay" }}>
          <DailyPannel />
        </Grid>
        <Grid item xs={6} sx={{ height: "97%" }}>
          <TeamMemberPannelComponent teamMember={teamMember} />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
98;