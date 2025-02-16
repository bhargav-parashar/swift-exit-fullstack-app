import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { config } from "../../App.jsx";
import { useSnackbar } from "notistack";
import IsLoggedInContext from "../Context/IsLoggedInContext.js";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Header = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);

  const handleLogout = async () => {
    try {
      const URL = `${config.endpoint}/auth/logout`;
      await axios.post(URL, {}, { withCredentials: true });
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
      setIsLoggedIn(false);
      localStorage.removeItem("userName");
      enqueueSnackbar("Logged out successfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      enqueueSnackbar(`Something went wrong - ${err}`, { variant: "warning" });
      console.log(err);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                SwiftExit
              </Link>
            }
          </Typography>

          {isLoggedIn && (
            <Stack direction="row" spacing={2} alignItems="center">
              <AccountCircle />
              <Typography>{ JSON.parse(localStorage.getItem("userName")) || ""}</Typography>

              <Link to="/" style={{ color: "white" }}>
                <Button onClick={() => handleLogout()} color="inherit">
                  Logout
                </Button>
              </Link>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
