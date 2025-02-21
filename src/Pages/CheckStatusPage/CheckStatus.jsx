import React, { useEffect, useState } from "react";
import { Stack, Container } from "@mui/material";
import axios from "axios";
import { config } from "../../App.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Grid from "../../components/Grid/Grid.jsx";

const CheckStatus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  //Query resignations table for user
  //If no items found, display no resignations found
  //Else, get resignations collections data - resignationid, emplooyee id, lwd, status
  //create a backend endpoint that returns firstname , lastname, and the above fields on request
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
        const rowItems = [
          {
            id: res.data[0]._id,
            lastName: JSON.parse(localStorage.getItem("userName")).split(
              " "
            )[1],
            firstName: JSON.parse(localStorage.getItem("userName")).split(
              " "
            )[0],
            lastWorkingDay: res.data[0].lwd,
            status: res.data[0].status,
          },
        ];
        console.log(rowItems);
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
      <Container sx={{ p: 5, height:"70vh" }}>
        <div style={{display:"flex", flexDirection:"column", height:"100%", maxHeight:"50px"}}>
          <Grid columns={columns} rows={rows} />
        </div>
      </Container>
    </>
  );
};
export default CheckStatus;
