import { Container, Box, Grid, Button, Input } from "@mui/material";
import Header from "./Components/header";

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
    <Container>
      <Header />
      <Box
        component="section"
        sx={{ p: 2, border: "1px dashed grey", minHeight: "800px" }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Input />
          <Button variant="outlined" sx={sxButton} autoFocus>
            Shuffle
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
