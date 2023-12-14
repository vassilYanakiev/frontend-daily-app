import { AppBar, Toolbar, Typography } from "@mui/material";
import HeaderButton from "./headerButton";

const Header = (): JSX.Element => {
  return (
    <AppBar position="sticky">
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
