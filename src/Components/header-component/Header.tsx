import { AppBar, Toolbar, Typography } from "@mui/material";
import HeaderButton from "./HeaderButton";

const Header = (): JSX.Element => {
  return (
    <AppBar
      position="sticky"
      sx={{ borderRadius: "14px", marginBottom: "24px" }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <HeaderButton text={"Daily shuffle"} />
          <HeaderButton text={"Daily stats"} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
