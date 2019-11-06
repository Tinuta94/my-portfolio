import React, { Component } from 'react'

export default class MySkills extends Component {
    render() {
        return (
            <div>
                <h1>Skills</h1>
                <ul>
                    <div class="skillcontainer">
                        <div class="skillsone">
                            <h5>Languages</h5>
                            <li> HTML </li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Python</li>
</div> <div class="skillsone">
                            <h5>Libraries</h5>
                            <li>jQuery</li>
                            <li>Node</li>
                            <li>React</li>
                            <li>Mongoose</li>
</div>

                   
                        <div class="skillstwo">
                            <h5>Databases</h5>
                            <li> MongoDB</li>
                            <li>SQL</li>
</div> <div class="skillsone">
                            <h5>Frameworks</h5>
                            <li>Django</li>
                            <li>Express</li>
</div>
<div class="skillsone">
                            <h5>Other</h5>
                            <li>Github</li>
                            <li>Heroku</li>
                            <li>Materialize</li>
                            <li>Material UI</li>
                        </div>
                    </div>
                </ul>

            </div>
        )
    }
}
