import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "e36ed364400282e43250b6c4c0274d44";

class App extends Component{

  state ={
    tempreature:'',
    city:'',
    counrty:'',
    humidity:'',
    description:'',
    error :''
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`) 
    const data = await api.json();
    console.log(data);
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        counrty: data.sys.counrty,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error :''
      })
    }else{
      this.setState ({
        temperature:'',
        city:'',
        counrty:'',
        humidity:'',
        description:'',
        error :'Please Enter Data'
      })
    }

  }

  render (){
  return (
    <div className="weather">
      <div className="form-container">
      <Form  getWeather={this.getWeather} />
      <Weather
      temperature= {this.state.temperature}
      city= {this.state.city}
      counrty= {this.state.counrty}
      humidity= {this.state.humidity}
      description= {this.state.description}
      error = {this.state.error}
      />
      </div>
    </div>
  );
 }
}

export default App;
