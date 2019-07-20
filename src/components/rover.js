import React from 'react';
import {useState} from 'react';
import '../styles/rover.css'

function Rover() {

    const API_KEY = `40jGdoOjxn5oEDg0mfNUTRhcpdHWxScRjyr0aYsB`;
    const [submit,setSubmit] = useState(false);
    const [images,setImages] = useState([]);
    const [date,setDate] = useState();
    const [rover,setRover] = useState();
    const [loading, setLoading] = useState(false);
    React.useEffect(() => {
      fetchdata();
    },[])
    const fetchdata = async (e) => {
        if(e !== undefined)
        e.preventDefault();
        console.log(date);
    //   const api_call1 = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`);
    //   const data = await api_call1.json();
    //   console.log(data);
      if(date !== undefined && rover !==undefined)
      {
        const api_call2 = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${API_KEY}`);
        const data2 = await api_call2.json();
        console.log(data2);
        setImages(data2.photos.map(pics => ({img: pics.img_src})));
        setLoading(false);
      }
    };
    console.log(images)
    console.log(images.length)


    return (
        <div>
        <div style = {{marginTop:"30px"}}></div>
        <div className = "container" style = {{textAlign:"center"}}>
          <h1>Mars Rover Images</h1>
        </div>
        <div className = "container d-flex justify-content-center" style = {{alignContent:"center", marginTop:"70px", marginBottom:"30px"}}>
        <form className="form-inline">
        <label className="my-1 mr-2">Choose Your Options</label>
        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange = {(e) => {setRover(e.target.value)}}>
        <option selected value = {undefined} disabled>Choose your Rover</option>
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
        </select>
        <div className="custom-control my-1 mr-sm-2">
            <input type="date" onChange = { (e) => {setDate(e.target.value)}}/>
        </div>
        <button onClick = {(e) => {
            e.preventDefault();
            if(date !== undefined && rover !== undefined)
            setLoading(true);
            setSubmit(true);fetchdata(e);
            }} className="btn btn-primary">Get Images</button>
        </form>
        </div>
        <div>
          <div className = "container">
              {(date === undefined) && (rover === undefined) && <div style={{textAlign:"center", marginTop:"30px"}}>Please select some date and rover</div>}
              {(rover === undefined) && (date !== undefined) && <div style={{textAlign:"center", marginTop:"30px"}}>Please select some rover</div>}
              {(date === undefined) && (rover !== undefined) && <div style={{textAlign:"center", marginTop:"30px"}}>Please select some date</div>}
              {(submit) && (!loading) && (date !== undefined) && (rover !== undefined) && images.length == 0 && <div style={{textAlign:"center", marginTop:"10px"}}> No images on this day, select some other date or rover</div>}
              { (!loading) ? images.map(entry => <img className = "img-thumbnail"   src={entry.img} />) : <div className="spinner-border text-secondary " role="status">
            <span className="sr-only">Loading...</span>
            </div>}
            </div>
         </div>
         </div>
      );
}

export default Rover;