import { AppBar, Toolbar, Button, Typography } from "@mui/material";

interface FooterProps {
  timer: string;
  onStart: () => void;
  onPause: () => void;
}

const Footer = () => {
  const handleStart = () => {
    console.log("Start");
  };

  const handlePause = () => {
    console.log("Pause");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#e2f3f9",
        borderRadius: "14px 14px 0 0",
        width: "90%",
        position: "fixed",
      }}
    >
      <Toolbar>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handlePause}>Pause</Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "right", color: "#4d779e" }}
        >
          Timer: 60 sec...
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
