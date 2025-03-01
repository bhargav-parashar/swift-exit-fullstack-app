import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import QuestionItem from "../../components/QuestionItem/QuestionItem";
import { config } from "../../App";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const Review = () => {
  const [resignationDetails, setResignationDetails] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const resignId = searchParams.get("id");

  //GET RESIGNATION DETAILS FOR REVIEW
  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const URL = `${config.endpoint}/admin//exit_responses?id=${resignId}`;
        const res = await axios.get(URL, { withCredentials: true });
        setResignationDetails(res.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, []);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(243,244,244,1) 0%, rgba(25,118,210,1) 100%)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Container sx={{ background: "transparent" }}>
        <Box
          pt={4}
          px={{ xs: 2, sm: 10, md: 25, lg: 15 }}
          height="75vh"
          sx={{ background: "transparent" }}
        >
          <Box p={2} sx={{ background: "#e3e7f1", borderRadius: "0.5rem" }}>
            {isLoading && (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
                height="70vh"
              >
                <Loader />
              </Stack>
            )}
            {!isLoading && resignationDetails.userDetails && (
              <>
                {/* EMPLOYEE DETAILS */}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    borderRadius: "0.5rem",
                    background: "snow",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                  p={2}
                  mb={2}
                >
                  <Stack direction='row' alignItems='center' >
                  <AccountCircleIcon
                    sx={{
                      borderRadius: "50%",
                      height: { xs: 50, md: 90 },
                      width: { xs: 50, md: 90 },
                      background:
                        "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,0.8519782913165266) 100%)",
                      color: "white",
                      mb: 1,
                    }}
                  />

                  <Stack direction="column" justifyContent={"flex-end"} p={1} >
                    <Typography variant="h5" fontWeight="bold">
                      {resignationDetails.userDetails.username}
                    </Typography>

                    <Typography variant="body1" sx={{ color: "gray" }}>
                      Employee
                    </Typography>
                  </Stack>
                  </Stack>

                  <Stack direction='row' gap={6} >
                    <Stack direction="column" justifyContent={"flex-end"} p={1}>
                    
                      <Typography variant="body1" fontWeight="bold">
                        Submitted on
                      </Typography>

                      <Typography variant="body2" sx={{ color: "gray" }}>
                      { resignationDetails.createdAt}
                      </Typography>
                    </Stack>

                    <Stack direction="column" justifyContent={"flex-end"} p={1}>
                      <Typography variant="body1" fontWeight="bold">
                        Last Working Day
                      </Typography>

                      <Typography variant="body2" sx={{ color: "gray" }}>
                        {resignationDetails.lwd}
                      </Typography>
                    </Stack>
                  </Stack>
                
                </Stack>

                {/* QUESTIONNAIRE */}
                <Box
                  sx={{
                    background: "snow",
                    borderRadius: "0.5rem",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                  mb={2}
                  p={3}
                >
                  {resignationDetails.userDetails.userresponses.responses.map(
                    (item, idx) => (
                      <QuestionItem
                        key={item.questionId}
                        questionitem={item}
                        idx={idx}
                        isReview
                      />
                    )
                  )}
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    pt={2}
                    gap={2}
                    mt={3}
                  >
                    <Button
                      startIcon={<ClearIcon />}
                      sx={{ width: "50%" }}
                      variant="outlined"
                      color="error"
                    >
                      Reject
                    </Button>
                    <Button
                      startIcon={<CheckIcon />}
                      sx={{ width: "50%" }}
                      variant="outlined"
                      color="success"
                    >
                      Approve
                    </Button>
                  </Stack>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Review;
