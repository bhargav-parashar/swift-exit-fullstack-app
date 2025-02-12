import Header from "./components/Header/Header.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";

function App() {
 
  return (
    <>
      <CssBaseline />
      <Header/>
      <Outlet/>
    </>
  )
  
}

export default App
