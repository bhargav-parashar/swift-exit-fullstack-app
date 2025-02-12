import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {
                <Link to="/" style={{ color: "white", textDecoration:"none" }}>
                  SwiftExit
                </Link>
              }
            </Typography>
          <Link to="/" style={{ color: "white" }}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="employee-home-page" style={{ color: "white" }}>
            <Button color="white">Employee</Button>
          </Link>
          <Link to="hr-home-page" style={{ color: "white" }}>
            <Button color="inherit">HR</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
