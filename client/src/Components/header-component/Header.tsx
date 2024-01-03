import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";

const Header = (): JSX.Element => {
  return (
    <AppBar
      position="sticky"
      sx={{
        borderRadius: "14px",
        marginBottom: "24px",
        backgroundColor: "#5794c2",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <HeaderButton text={"Daily Standup"} />
          </Link>
          <Link to="/stats">
            <HeaderButton text={"Daily stats"} />
          </Link>
          <Link to="/teams">
            <HeaderButton text={"Team"} />
          </Link>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <Avatar sx={{ bgcolor: "lightblue" }}>U</Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
