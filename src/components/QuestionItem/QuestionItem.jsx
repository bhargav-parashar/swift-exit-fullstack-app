import { Container, TextField, Typography } from "@mui/material";

const QuestionItem = ({handleInputChange, questionitem, idx}) =>{
    const handleChange = (e) =>{
        console.log(e.target.id);
        console.log(e.target.value);
        setResponses(
            (prev) => [...prev,]
        )
    }
    return (
        <>
            <Typography sx={{mb:1}}>{ `${ idx+1 }. ${questionitem.question}` }</Typography>
            <TextField
                    id={questionitem._id}
                    label=""
                    placeholder="Enter your response"
                    variant="outlined"
                    sx={{width:"100%", mb:3}}
                    onChange={(e)=>handleInputChange(questionitem._id, e.target.value)}
            />
        </>
    )
}
export default QuestionItem;