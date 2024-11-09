import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { red } from '@mui/material/colors';
export default function SearchBox({updateInfo}){
    let [city,setCity]= useState("");
    let [error, setError]= useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4957739e969a2210b387728ad7c8d979"


    let getWeatherInfo = async () => {
        try {
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResp = await  response.json();

let result= {
    city: city,
    temp: jsonResp.main.temp,
    temp_max : jsonResp.main.temp_max,
    temp_min : jsonResp.main.temp_min,
    humidity : jsonResp.main.humidity,
    feelLike: jsonResp.main.feels_like,
    weather : jsonResp.weather[0].description,

};
console.log(result);
return result;
        } catch(err) {
          throw err;
        }
       
 };


let handleChange = (evt) => {
    setCity(evt.target.value );
};

let handlesubmit = async (evt ) => {
    try {
        evt.preventDefault();
        console.log (city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    } catch(err ) {
        setError(true)

    }

};

    return (
        <div className='search'>
        <form onSubmit={ handlesubmit }>
        <TextField id="city" label="city name" variant="filled" required value={city}  onChange={handleChange}/>
       <br />
       <br />
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{color: "red"}}> No such place exists!</p>}
        </form>
        </div>
    )
}