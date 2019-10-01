import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading'
import * as Location from 'expo-location';

export default class App extends React.Component{
  getLocation  = async() => {
    try{
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    }catch(e){
      Alert.alert('Can\'t find you', 'So sad');
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />
  }
}