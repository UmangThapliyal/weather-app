import React from "react";

class Form extends React.Component{
  render(){
    return (
      <form onSubmit={this.props.getWeather}>
        <input id="city" type="text" className="style-input" name="city" placeholder="Enter your city name" />
        <input id="countries" type="text" className="style-input" name="country" placeholder="Enter your country name" />
        <button className="styled-button">Get Weather</button>
      </form>
    );
  }
}

export default Form;
