import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { config } from "../../App.jsx";
import axios from "axios";
import QuestionItem from "../../components/QuestionItem/QuestionItem.jsx";
import DateCard from "../../components/DateCard/DateCard.jsx";
import Stepper from "../../components/Stepper/Stepper.jsx";

const EmployeeHomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [lwd, setLwd] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const URL = `${config.endpoint}/user/questionnaire`;
    const callApi = async () => {
      try {
        const { data } = await axios.get(URL);
        setQuestions(data);

        const initialResponses = {};
        data.forEach((item) => {
          initialResponses[item._id] = "";
        });
        setResponses(initialResponses);
      } catch (err) {
        console.log(err);
      }
    };
    callApi();
  }, []);

  const handleInputChange = (questionId, value) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3){ 
      const formattedResponse = questions.map((item) => ({
        questionId: item._id,
        questionText: item.question,
        response: responses[item._id],
      }));
      setCurrentStep((prev) => prev + 1);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1){ 
      setCurrentStep((prev) => prev - 1);
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleSubmit = () => {
    const formattedResponse = questions.map((item) => ({
      questionId: item._id,
      questionText: item.question,
      response: responses[item._id],
    }));
    console.log(formattedResponse);
  };

  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Box
          sx={{
            p: 5,
            m: 0,
            width: "25%",
            background:"#e5ecff",
            display: { xs: "none", md: "block" }
            
          }}
        >
          <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
        </Box>

        <Box sx={{ border: "2px solid green",  borderLeft:"none", borderTop:"none", p: 5 }}>
         
          {currentStep === 1 && (
            <Stack direction="row" justifyContent="center" alignItems="center"  sx={{ minHeight: "75vh", minWidth: "50vw" }}>
              <DateCard lwd={lwd} setLwd={setLwd} />
            </Stack>
          )}

          {currentStep === 2 && (
            <Box sx={{ minHeight: "75vh", minWidth: "50vw" }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Exit Questionnaire
              </Typography>

              {questions.map((item, idx) => (
                <QuestionItem
                  key={item._id}
                  questionitem={item}
                  idx={idx}
                  handleInputChange={handleInputChange}
                />
              ))}
            </Box>
          )}

          {currentStep === 3 && (
            <Box sx={{ minHeight: "75vh", minWidth: "50vw" }}>

            </Box>
          )}

          <Stack direction="row" justifyContent="space-between">
            {currentStep > 1 ? (
              <Button variant="outlined" onClick={handleBack}>
                Back
              </Button>
            ) : (
              <Box></Box>
            )}
            <Typography>{`${currentStep} of 3`}</Typography>

            {currentStep < 3 ? (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            ) : currentStep === 3 ? (
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            ) : (
              {}
            )}
          </Stack>
        </Box>

        <Box
          sx={{
           p: 5,
            m: 0,
            width: "25%",
            display: { xs: "none", md: "block" },
          }}
        ></Box>
      </Stack>
    </>
  );
};
export default EmployeeHomePage;
