import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Header from "./Components/header-component/Header";
import TeamsComponent from "./Components/teams/TeamsComponent";
import DailyStats from "./Components/daily-stats/DailyStats";
import DailyPannel from "./Components/ds-page/daily-pannel/DailyPannel";
import TeamMemberPannelComponent from "./Components/ds-page/daily-pannel/TeamMemberPannelComponent";
import DataProvider from "./DataProvider";
import Footer from "./Components/footer/Footer";

const teamMember = {
  name: "John",
  surname: "Doe",
  role: "Developer",
  availability: "100%",
  assignedJiraCard: "JIRA-123",
  id: "1",
};

function App() {
  return (
    <DataProvider>
      <Container
        sx={{
          height: "90vh",
          overflow: "hidden",
          backgroundColor: "#d4e0e6",
          borderRadius: "14px",
          border: "2px solid #4d779e",
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Grid container xs={12} sx={{ height: "80%" }}>
                  <Grid xs={5} sx={{ height: "96%", overflow: "overlay" }}>
                    <DailyPannel />
                  </Grid>
                  <Grid item xs={7} sx={{ height: "96%" }}>
                    <TeamMemberPannelComponent teamMember={teamMember} />
                  </Grid>
                </Grid>
              }
            />
            <Route path="/stats" element={<DailyStats />} />
            <Route path="/teams" element={<TeamsComponent />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </DataProvider>
  );
}

export default App;
