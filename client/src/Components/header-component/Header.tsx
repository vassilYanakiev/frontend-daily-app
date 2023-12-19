import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
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
          <HeaderButton text={"Daily Standup"} />
          <HeaderButton text={"Daily stats"} />
          <HeaderButton text={"Team"} />
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
