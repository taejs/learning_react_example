import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar } from 'react-native';
import Loading from './Loading'
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '46417d394828447929b6f3fdeddfd8dd';

export default class App extends React.Component{
  state = {
    isLoading : true
  }
  getLocation  = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude , longitude}} = await Location.getCurrentPositionAsync();
      this.setState({
        isLoading : false
      });

      const weather = await this.getWeatherAsync(latitude, longitude);
      //Send to API and get weather
    }catch(e){
      Alert.alert('Can\'t find you', 'So sad');
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
  }
  async getWeatherAsync(lat,long) {
    lat = lat || 37;
    long = long || 127;
    const {data : {main : {temp}, weather}} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`
    )

    console.log(weather[0].main);
    this.setState({
      isLoading : false,
      temp : temp,
      condition : weather[0].main
    });
    // fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`).then(function(response) {
    //   return response.json(lat, long)
    // })
  }
}