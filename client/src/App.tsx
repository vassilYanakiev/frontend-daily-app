import { Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header-component/Header";
import Footer from "./Components/footer/Footer";
import TeamsComponent from "./Components/teams/TeamsComponent";
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
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Grid container xs={12} sx={{ height: "80%" }}>
                <Grid xs={5} sx={{ height: "97%", overflow: "overlay" }}>
                  <DailyPannel />
                </Grid>
                <Grid item xs={7} sx={{ height: "97%" }}>
                  <TeamMemberPannelComponent teamMember={teamMember} />
                </Grid>
              </Grid>
            }
          />
          <Route path="/stats" element={<h3>Daily Stats</h3>} />
          <Route path="/teams" element={<TeamsComponent />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
