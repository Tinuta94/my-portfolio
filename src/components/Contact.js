import React, { Component } from 'react'
// import {Link} from "react-router-dom"

export default class Contact extends Component {
    render() {
       
            return (
              <div>
             <h1>Contact Info</h1>
             <div class="contactinfoo">
              <div class="linkedin">
           <a href="https://www.linkedin.com/in/cristina-crestenciuc-99581118b/"><i class="fa fa-linkedin fa-5x"></i></a>
           </div>
           <div class="github">
            <a href="https://github.com/Tinuta94"><i class="fa fa-github-square fa-5x"></i>    </a> 
            </div>
            <div class="mail">
             <a href="mailto:cristina.crestenciuc@gmail.com"><i class="fa fa-envelope fa-5x" ></i></a>
             </div>
             <div class="mail">
                 <a href="https://drive.google.com/open?id=15-bH_aHLG8D3K1k1vkCaES5L1lPzuqts"> <i class="fa fa-file fa-5x"></i></a>
             </div>
             </div>
          
          
            </div>
        )
    }
}
