import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import LoginInputBox from "../../components/LoginInputBox/LoginInputBox";

const Register = () => {
  

  return (
    <>
      <Box
        sx={{
          height: "70vh",
          background:
            "linear-gradient(0deg, rgba(243,244,244,1) 0%, rgba(25,118,210,1) 100%)",
          padding: "24px",
          position:"relative",
          zIndex:10
        }}
      >
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, md: 8 }}
          
          ></Grid>

          <Grid size={{ xs: 12, md: 4 }} >
            <Stack
              direction="row"
              sx={{ justifyContent: { xs: "center", md: "flex-end" } }}
            >
              <LoginInputBox isRegister />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Register;
