import React from 'react';
import {useState} from 'react';


function Asteroid()
{
    const [date,SetDate] = useState();
    const [loading,setLoadin] = useState();
    const [submit,setSubmit] = useState("false");
    const API_KEY = `40jGdoOjxn5oEDg0mfNUTRhcpdHWxScRjyr0aYsB`;
    React.useEffect(() => {
        getData();
    },[date,submit])

        const[asteroids,Setasteroids] = useState();

            const getData = async () => {
                if(date !== undefined && submit === true)
                {
                    const api_call = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=${API_KEY}`)
                    const data = await api_call.json();

                    console.log(data);
                    Setasteroids(data["near_earth_objects"][`${date}`].map(it => ({name: it.name, id: it.id, close_approach_date : it.close_approach_data[0].close_approach_date_full, miss_distance : it.close_approach_data[0]["miss_distance"]["kilometers"], relative_velocity: it.close_approach_data[0]["relative_velocity"]["kilometers_per_hour"]})));
                }
                setSubmit(false);
    }
    if(asteroids != undefined)
    console.log(asteroids.map( it => it.close_approach_date ));

    return (
        <div className = "container" style = {{marginTop : "30px"}}>

            <div style = {{textAlign:"center" ,marginBottom : "30px", fontSize:"30px"}}>Get Closest Approach To Earth Asteroid Info</div>
            <form style = {{textAlign:"center"}}>
                <input style = {{marginRight : "10px", border : "solid 2px", borderRadius : "2px"}} type="date" onChange = {(e) => SetDate(e.target.value)}/>
                <button className = "btn btn-primary btn-sm" onClick = {(e) =>
                {console.log(date);
                 e.preventDefault();
                 if(date !== undefined)
                 {setSubmit(true);
                 }}}>Get Info</button>
            </form>
            <div>{(date == undefined) && (<div style = {{marginLeft:"40%",marginTop :"20px"}}>Pick a Date</div>)}</div>
            {(submit === true)  && <div className="spinner-border text-secondary " role="status">
            <span className="sr-only">Loading...</span>
            </div>}
            {(asteroids != undefined) && <table className="table" style = {{marginTop: "20px"}}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Close Approach Date</th>
                    <th scope="col">Miss Distance (Km)</th>
                    <th scope="col">Realative Velocity (Km/hr)</th>
                    </tr>
                </thead>
                <tbody>
                        {asteroids.map((it,ind) => (
                            <tr key = {it.id}>
                            <th>{ind}</th>
                            <td>{it.id}</td>
                            <td>{it.name}</td>
                            <td>{(it.close_approach_date !== undefined)?it.close_approach_date : <div>Not Available</div>}</td>
                            <td>{it.miss_distance}</td>
                            <td>{it.relative_velocity}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            }

        </div>
    )
}

export default Asteroid;