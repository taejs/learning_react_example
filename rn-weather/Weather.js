import React from 'react';
import {View, Text, StyleSheet,StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze : {
    iconName : 'weather-hail',
    colors : ['#c9d6ff', '#e2e2e2']
  },
  Clear : {
    iconName : 'weather-hail',
    colors : ['#c9d6ff', '#e2e2e2'],
    title : 'hi',
    subtitle : '야근한다'
  },
  default : {
    iconName : 'border-none-variant',
    colors : ['#999999', '#999999']
  }
}
export default function Weather({ temp, condition }) {
  const weather = weatherOptions[condition] ? weatherOptions[condition] : weatherOptions['default'];
  return (
      <LinearGradient
        colors={weather.colors}
        style={styles.container}
      >
        <StatusBar barStyle={"light-content"}/>
      <View style={styles.wrap}>
        <MaterialCommunityIcons name={weather.iconName} size={86} color={'#fff'}/>
        <Text style={styles.temperature}>{temp} 'C</Text>
      </View>
      <View style={{...styles.wrap, ...styles.textContainer}}>
        <Text style={styles.title}>{weather.title}</Text>
        <Text style={styles.subtitle}>{weather.subtitle}</Text>
        </View>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  wrap : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  temperature : {
    fontSize : 50,
    color : 'white'
  },
  title : {
    fontSize : 40,
    color : 'white',
    fontWeight: '600',
    marginBottom : 10
  },
  subtitle:{
    fontSize : 20,
    color : 'white'
  },
  textContainer : {
    flex : 1,
    paddingHorizontal : 20,
    alignItems:'flex-start'
  }
});
