import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default class MyProjects extends Component {
    render() {
    return (
      <div>
     <h1>Projects</h1>
     <div class="projects">
     <p class="proj">1.Game   <a href="https://tinuta94.github.io/Train-your-Brain/">Train your Brain</a> <br></br>
  This is a quiz game where the user gets to choose the next question 
  by choosing from a category and then choosing a point amount (100 to 500). 
  The questions are phrased as answers and the user chooses from a list of 4 
  questions that match the answer. Created with HTML,CSS,Javascript.<br></br>
  

  </p>
  <div class="clasa">
  
  <img src="https://i.imgur.com/uEB0suU.jpg" width="600" height="300"/>
  
  </div>
  </div>

  <hr></hr>
  
  <div class="projects">
  <div class="projthree">
  <img src="https://i.imgur.com/qajIKM4.png" width="600" height="300"/>
  </div>
    <div class="textt">
  <p class="proj">2.First Full-stack Application <a href="https://secure-castle-12366.herokuapp.com">"Galaxy"</a><br></br>
  A foray into building a full-stack server application. I built a Node/Express App 
  with Mongo.The database I created keeps tracking of stores,clients and products, where 
  user can create, read, update and delete the information.
   
  </p>
  </div>
  
  </div>
  <hr></hr>
  
  <div class="projects">
  <div class="textt">
  <p class="proj">
  3.<a href="https://ancient-temple-64968.herokuapp.com">A MERN Stack Application</a><br></br>
  Allows user to add different category movies  and save separately the ones they want to watch.
  Created with Node, Express, Mongoose and React.
  </p>
  </div>
  <div class="projthree">
  <img src="https://i.imgur.com/OLWsqwO.jpg" width="600" height="300"/>
  </div>
  </div>

<hr></hr>
  <div class="projects">
  <div class="projthree">
<img src="https://i.imgur.com/vmwgTVs.jpg" width="600" height="300"/>
   </div>
  <div class="textt">
  <p class="proj"> 
   4.<a href="https://shrouded-crag-12735.herokuapp.com">Django + React Application</a> <br></br>
    Allows user to create new services and specialists for a beauty salon.
  Created with Node,React,SQL and Django.
</p>
</div>

   </div>
                
            </div>
        )
    }
}
