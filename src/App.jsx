import React from "react";
//import CardComponent from "./components/CardComponent";
// import Gallery from "./FIles/Gallery";
// import Pic from "./Person/Pic";
// import Firstdemo from "./Lizard/Firstdemo";
//import { Info, SmartDisplay, SmartDisplaySharp } from "@mui/icons-material";
//import { alignProperty } from "@mui/material/styles/cssUtils";
// import CardComponent from "./components/CardComponent";
// import ConditionalRendiring from "./components/ConditionalRendiring";
// import Cars from "./components/Cars";
//  import Designs from "./components/Designs";
//  import Axios from "./Test/Axios";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import HomePage from './Test/HomePage';
// import DetailsPage from "./Test/DetailsPage";
import LoginPage from "./Test/LoginPage";
import NextPage from "./Test/NextPage";
import AddExam from "./Person/AddExam";
import Results from "./Person/Results";

 
 

// import Home from "./Pages/Home";
// import Blogs from "./Pages/Blogs";
// import Contact from "./Pages/Contact";
// import NoPages from "./Pages/NoPages";
// import Layout from "./Pages/Layout";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoadingButton from '@mui/lab/LoadingButton';
// import SaveIcon from '@mui/icons-material/Save';
// import Stack from '@mui/material/Stack';
// import Progress from "./components/Progress";
// import Boxes from "./components/Boxes";
// import { Avatar, Icon } from "@mui/material";




// const cars = ['Ford', 'BMW', 'Audi', 'mustang'];




//import Click from "./button/Click";

  


function App() {

  return (

    <React.Fragment>
      <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} /> */}
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/NextPage" element={<NextPage />} />
        <Route path="/AddExam" element={<AddExam />} /> 
        <Route path="/" element={<AddExam />} />
        <Route path="/Results" element={<Results />} />
        
      
      </Routes>
    </Router>
   
    
      


    

      {/* <Stack direction="row" spacing={2}>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>

    <Progress/>
    <Boxes />
    
    <Avatar/>

    <Icon/> */}

      {/*     
      <BrowserRouter>
      <Routes >
       
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPages />} />
          
        </Route>
      </Routes>
    </BrowserRouter> */}



      {/* <div style={{display:"flex", flexDirection:"row",alignItems:"center" ,justifyContent:"start",flexShrink:"revert-layer",flexWrap:"nowrap"} }>
      <Firstdemo img="https://img.freepik.com/free-photo/majestic-bengal-tiger-resting-mosscovered-rock-heart-jungle_1268-35024.jpg?ga=GA1.1.889362631.1719407853&semt=sph" heading="tiger" title="strongest animal in world"/>
      <Firstdemo img="https://img.freepik.com/free-vector/illustration-global-icon_53876-9267.jpg?ga=GA1.1.889362631.1719407853&semt=sph" heading="world" title="EARTH"/>
      <Firstdemo img="https://th.bing.com/th/id/OIP.qOOkJRdpKAUApP8hUDWqyAHaEK?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" heading="godzilla" title="god who eat starts"/>
      <Firstdemo img="https://img.freepik.com/free-vector/happy-cartoon-puppy-with-collar_1308-163580.jpg?ga=GA1.1.889362631.1719407853&semt=sph" heading="dog" title="homely animal"/>
      </div>  
       <ConditionalRendiring isGoal={false}/>
      <Cars cars={cars}/>  */}

      {/* <Designs/> */}
      {/* <Cars cars={cars}/> */}


    </React.Fragment>


  )
}
export default App;


