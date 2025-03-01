import React, { useEffect, useState } from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import axios from "axios";
import { config } from "../../App.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Grid from "../../components/Grid/Grid.jsx";
import { useNavigate } from "react-router-dom";

const HRHomePage = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const handleReview = (id) =>{
     navigate(`/review?id=${id}`)
    };
    const columns = [
        { 
          field: "id", 
          headerName: "Resignation ID", 
          width: 210
        },
        {
          field: "firstName",
          headerName: "First name",
          flex: 1
        },
        {
          field: "lastName",
          headerName: "Last name",
          flex: 1
        },
        {
          field: "lastWorkingDay",
          headerName: "Last Working Day",
          flex: 1
        },
        {
          field: "status",
          headerName: "Status",
          flex: 1
        },
        {
          field: "review",
          headerName: "Action",
          flex: 1,
          align:"center",
          headerAlign: "center",
          renderCell: (params) => {
            const resignId =params.row.id;
            return (
             
              <Button variant="contained" onClick={()=>handleReview(resignId)}>
                Review
              </Button>
             
            );
            
          },
        }
        
      ];

    

      useEffect(() => {
        //make a get request to get resignations by userid
        //if result returned is not null, set isSubmitted as true
        async function getUserResignation() {
          const URL = `${config.endpoint}/admin/resignations`;
          try {
            setIsLoading(true);
            const res = await axios.get(URL, { withCredentials: true });
            const rowItems = res.data.map((item)=>({
                id: item._id,
                firstName: item.userDetails.split(' ')[0],
                lastName: item.userDetails.split(' ')[1],
                lastWorkingDay:item.lwd,
                status:item.status
            }))
            setRows(rowItems);

          } catch (err) {
            console.log(err);
          } finally {
            setIsLoading(false);
          }
        }
        getUserResignation();
      }, []);

    return(
        <Container sx={{ px: 5, pt: 10, height: "70vh" }}>
        <Box>
        <Typography sx={{fontSize:"1vw", mb:5}}>All Resignations</Typography>
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
    )
}
export default HRHomePage;
