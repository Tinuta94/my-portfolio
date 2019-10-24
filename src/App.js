import React from 'react';
import './App.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Switch, Route, Link } from "react-router-dom";
import AboutMe from './components/AboutMe.js';
import MyProjects from './components/MyProjects.js';
import Contact from './components/Contact.js';
import MySkills from './components/MySkills.js'


function App() {
  return (
<div className="App">
  
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Tabs value="" onChange="" aria-label="simple tabs example" >
       
       

          <Link ><Tab label="" /></Link>
          <Link to="/home" class="link"><Tab label="About Me" /></Link>
          <Tab label="" />
          <Link to="/home/skills" class="link"> <Tab label="My Skills" /></Link>
          <Tab label="" />
         <Link to="/projects" class="link"> <Tab label="My Projects" /></Link>
          <Tab label="" />
         <Link  to="/contact" class="link"> <Tab label="Contact Info" /></Link>
         <Tab label="" />
         
          
        </Tabs>
      </AppBar>
      <div class="container">
      <div class="personalinfo">
        
      <img  class="myimg" src="https://i.imgur.com/Bzhy7cW.jpg" width="200" height="200" />
      <p class="name">Cristina Crestenciuc</p>
      </div>      
                <h2>“If you really believe in what you’re doing, work hard, take nothing personally <br></br> and if
                     something blocks one route, find another. Never give up.” — Laurie Notaro</h2>
                     <p class="paragraph">Software Engineer with extensive education in software design and application development. 
                    Good  learner with strong time management and multi-tasking skills.
                Completed over 400 hours of coursework in a training program  at General Assembly  dedicated to 
                    giving students a deep dive into the world of web development.</p>
                     </div>
      <Switch>
       
         <Route exact path="/home" component={AboutMe}/>
         <Route exact path="/home/skills" component={MySkills}/>
         <Route exact path="/projects" component={MyProjects}/>
         <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}




export default App;
