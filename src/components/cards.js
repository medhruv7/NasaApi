import React from 'react'
import {Link} from 'react-router-dom'
import asteroid from '../assests/asteroid.jpg'
function Cards ()
{
    return (
        <div className = "container" style = {{marginTop : "50px"}}>
            <div className = "card-deck">

            <div className="card" style={{width: "18rem"}}>
                <img src = {require('../assests/curiosity.jpg')} className = "card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Mars Rover Photos</h5>
                    <p className="card-text">Get Photos by Dates from 3 of the Rovers on the planet Mars. Namely : Curiosity, Opportunity, Spirit</p>
                    <Link to = "/Mars" className="btn btn-primary">Mars Photos</Link>
                </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
                <img src= {asteroid} className = "card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Asteroid Info</h5>
                    <p className="card-text">Near Earth Object : Search for Asteroids based on their closest approach date to Earth. Info Available are Id,Name,Miss Distance,Relative Velocity,Approach Date</p>
                    <Link to="/Asteroid" className="btn btn-primary">Asteroid Info</Link>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Cards;