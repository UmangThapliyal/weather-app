import React from "react";

import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import "./App.css";

const APIKEY = "74c3db4f5910350c12b6c4865b7b2231";
const url = "https://api.openweathermap.org/data/2.5/weather?q="

class App extends React.Component {
  state = {
      temprature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
	  icon: undefined,
      error: undefined
  };
  
  convertKelvin(temp){
    return (temp - 273.15).toFixed(2);
  }
  
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const countries = e.target.elements.countries.value;
    const apiCall = await fetch(`${url}${city},${countries}&appid=${APIKEY}`);
    const data = await apiCall.json();  
 	if(data.cod !== 200){
	  this.setState({ 
		temprature: "",
		city: "",
		country: "",
		humidity: "",
		description: "",
		icon: "",
		wind: "",
		error: data.message 
	  });
	}	
	else{
	  this.setState({
        temprature: this.convertKelvin(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
	    icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
	    wind: data.wind.speed,
        error: ""  
      });
	}
  }

  render(){
    return (
	  <div> 
		<div className="outer-div w-50">
		  <Titles />
		  <div>
		    <Form getWeather={this.getWeather} />
			<Weather 
			  temprature={this.state.temprature}
			  city={this.state.city}
			  country={this.state.country}
			  humidity={this.state.humidity}
			  description={this.state.description}
			  icon={this.state.icon}
			  wind={this.state.wind}
			  error={this.state.error}
			/>
		 </div>
	  </div>
	</div>
    )    
  }
}

export default App;
