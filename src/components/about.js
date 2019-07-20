import React from 'react'
import nasa from '../assests/nasa.jpg'
function About ()
{
    return (
        <div className = "container">
            <div>
            <img src={nasa} style = {{maxWidth:"300px"}}alt=""/>
            <div className = "shadow-lg p-3 mb-5 bg-white rounded" style = {{marginTop : "80px"}}>
            <span style = {{fontSize:"30px"}}>About</span>
            <p className = "text-justify font-weight-lighter text text-monospace" style = {{marginTop:"30px"}}>
            We have a new Open Innovation team to continue NASA’s efforts to meet the White House mandate to set our data free – in a format that is useful for you. In doing so, we hope to spark your creative juices and equip you with tools to innovate your world – whether local, global, or interstellar – leveraging our digital assets. We may not be able to offer you the ride-of-your-life on a spaceship (at least for now), but we can certainly work together to solve looming challenges here on Earth – using NASA data, tools, and resources.
            </p>
            </div>
            </div>

            <div className = "shadow-sm p-3 mb-5 bg-white rounded" style = {{marginTop: "100px"}}>
            <p>Made By : Dhruv Aggarwal</p>
            <address>
                Email : <a href="mailto:medhruv7@gmail.com">medhruv7@gmail.com</a>
            </address>
            </div>
        </div>
    )
}


export default About;