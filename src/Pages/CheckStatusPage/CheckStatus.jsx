import React, { useEffect, useState } from "react";
import { Stack, Container, Box, Typography } from "@mui/material";
import axios from "axios";
import { config } from "../../App.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Grid from "../../components/Grid/Grid.jsx";

const CheckStatus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const columns = [
    { field: "id", headerName: "Resignation ID", width: 210 },
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
    },
    {
      field: "lastWorkingDay",
      headerName: "Last Working Day",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
  ];

  useEffect(() => {
    //make a get request to get resignations by userid
    //if result returned is not null, set isSubmitted as true
    async function getUserResignation() {
      const URL = `${config.endpoint}/user/resignation`;
      try {
        setIsLoading(true);
        const res = await axios.get(URL, { withCredentials: true });
        console.log(res.data);
        const rowItems = [
          {
            id: res.data[0]._id,
            lastName: res.data[0].userDetails.split(' ')[1],
            firstName: res.data[0].userDetails.split(' ')[0],
            lastWorkingDay: res.data[0].lwd,
            status: res.data[0].status
          },
        ];
        setRows(rowItems);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getUserResignation();
  }, []);

  return (
    <>
      <Container sx={{ px: 5, pt: 10, height: "70vh" }}>
        <Box>
        <Typography sx={{fontSize:"1vw", mb:5}}>Resignation Processing Status</Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              maxHeight: "50px",
            }}
          >
            <Grid columns={columns} rows={rows} />
          </Box>
          
        </Box>
      </Container>
    </>
  );
};
export default CheckStatus;
