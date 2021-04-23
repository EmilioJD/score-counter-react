//import logo from './logo.svg';
import './App.css';
import { Box, makeStyles } from "@material-ui/core";
import Navbar from "./components/navbar/Navbar"
import Score from "./components/score/Score"
import background from "./components/background/tennisbackground.jpeg"



function App() {
  return (
    <div
    style={{backgroundImage: `url(${background})`}}>
    <Box>
      <Navbar />
      <Score />
    </Box>
    </div>
  );
}

export default App;
