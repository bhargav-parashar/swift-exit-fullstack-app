import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import QuestionItem from "../../components/QuestionItem/QuestionItem";
import { config } from "../../App";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Review = () => {
  const [responses, setResponses] = useState([]);
  const [resignation, setResignation] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const resignId = searchParams.get("id");



  //GET RESIGNATION DETAILS FOR REVIEW
  useEffect(()=>{
    const getDetails = async () =>{
      try{
        const URL = `${config.endpoint}/admin//exit_responses?id=${resignId}`;
        const res = await axios.get(URL, {withCredentials : true});
        console.log(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getDetails();
  },[])
 
  return (
    <Container>
      <Box sx={{ minHeight: "75vh", minWidth: "50vw" }}>
        <Box mt={4}>
          {responses.map((item, idx) => (
            <QuestionItem
              key={item.questionId}
              questionitem={item}
              idx={idx}
              isReview
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Review;
