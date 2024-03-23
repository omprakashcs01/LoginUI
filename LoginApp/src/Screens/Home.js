import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from '../btn';
import { darkGreen, lightGreen } from '../constants';



const Home = (props) => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100 ,}}>
        <Text style={{color: 'white', fontSize: 64, }}>Welcome</Text>
        <Text style={{color: 'white', fontSize: 64,  marginBottom: 20}}>code</Text>
        <Btn bgColor={lightGreen} textColor={'white'} btnText={'Login'}
        press={()=>  props.navigation.navigate("Login")}
        /><Btn bgColor={'white'} textColor={darkGreen} btnText={'Sign Up'}
        press={()=> props.navigation.navigate('SignUp')}
        />
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});
