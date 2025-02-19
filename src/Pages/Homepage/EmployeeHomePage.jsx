import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import ServiceCard from "../../components/ServiceCards/ServiceCard.jsx"; 


const EmployeeHomePage = () => {
  const resignationDescription = "Start a new resignation process. Step by step guide to draft and submit your resgination."
  const statusDescription = "Check the status of previously submitted resignation."
  return(
    <>
    <Stack direction={{xs:'column',sm:'row'}} justifyContent="center" alignItems="center" spacing={2} height="70vh">
      <ServiceCard label={"Submit Resignation"} description={resignationDescription} isSubmit/>
      <ServiceCard label={"Check Status"} description={statusDescription} />
    </Stack>
    </>
  )
};
export default EmployeeHomePage;
