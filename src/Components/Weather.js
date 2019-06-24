import React from "react";

const Weather = props => {
  return(
    <div>
      {props.city && props.country && <h2 className="grey-color no-margin-bottom">{props.city}, {props.country}</h2>}
      {props.description && <span className="grey-color">{props.description}</span>}
	  <div className="info-block">
		<div className="temp-block d-inline-align">
		{props.icon && <img alt="" className="temp-img" src={props.icon}/>}
		{props.temprature && <span className="temp-text">{props.temprature}
		  <sup className="temp-superscript">&#8451;</sup></span>}
		</div>
		<div className="add-info">
		  {props.humidity && <div className="grey-color mb-1">Humidity: {props.humidity}%</div>}
		  {props.wind && <div className="grey-color">Wind: {props.wind} km/h</div>}
		</div>
	  </div>
      {props.error && <p>Error: {props.error}</p>}
    </div>
  )
}

export default Weather;
