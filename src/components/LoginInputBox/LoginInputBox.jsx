import React, { useState } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from "../../App.jsx";

const LoginInputBox = ({ isRegister = false }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (formData) => {
    const URL = `${config.endpoint}/auth/register`;

    const body = {
      username: formData.username,
      password: formData.password,
    };

    const headers = {
      headers: {
        Authorization: config.authorizaiton,
      },
    };

    try {
      setLoading(true);
      await axios.post(URL, body, headers);
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
      });
      console.log("Submitted!");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    console.log("Login:", formData);
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        px: 5,
        pt: 5,
        pb: 10,
        background: "#f3f4f4",
        maxWidth: { xs: 320, md: 450 },
        minWidth: { xs: 320, md: 450 },
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      {isRegister ? (
        <Typography sx={{ mb: 3 }} variant="h5">
          Register
        </Typography>
      ) : (
        <Typography sx={{ mb: 3 }} variant="h5">
          Login
        </Typography>
      )}
      <Stack spacing={2}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
        />
        {isRegister && (
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}
        {isRegister ? (
          <Button variant="contained" onClick={() => handleRegister(formData)}>
            Register
          </Button>
        ) : (
          <Button variant="contained" onClick={() => handleLogin(formData)}>
            Login
          </Button>
        )}
      </Stack>

      {isRegister ? (
        <Typography sx={{ mt: 2 }}>
          Have an account?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#1976d2" }}>
            Login
          </Link>
        </Typography>
      ) : (
        <Typography sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            Register now
          </Link>
        </Typography>
      )}
    </Box>
  );
};

export default LoginInputBox;
