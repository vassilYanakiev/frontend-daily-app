import { useContext, useState, useEffect } from "react";
import { ParticipantsContext } from "../../context-Participants";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Footer = () => {
  const {
    state: { timerStarted },
    dispatch,
  } = useContext(ParticipantsContext);
  const [timer, setTimer] = useState(0);

  const toggleStart = () => {
    dispatch({ type: "SET_TIMER_STARTED", payload: !timerStarted });
  };

  useEffect(() => {
    if (timerStarted) {
      const interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerStarted]);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#c2cbcf",
        borderRadius: "14px 14px 0 0",
        width: "98vw",
        position: "fixed",
      }}
    >
      <Toolbar>
        <Button onClick={toggleStart} disabled={timerStarted}>
          Start
        </Button>
        <Button onClick={toggleStart} disabled={!timerStarted}>
          Pause
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "right", color: "#4d779e" }}
        >
          {`Timer elapsed: ${Math.floor(timer / 60)} minutes ${
            timer % 60
          } seconds`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
