import { Container, Grid } from "@mui/material";
import Header from "./Components/header-component/Header";
import DailyPannel from "./Components/ds-page/daily-pannel/DailyPannel";

function App() {
  return (
    <Container sx={{ padding: "0px" }}>
      <Header />
      <Grid
        container
        direction="row"
        alignContent={"letft"}
        sx={{ width: "50vw" }}
      >
        <DailyPannel />
      </Grid>
    </Container>
  );
}

export default App;
