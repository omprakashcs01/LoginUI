import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Btn = ({btnText , bgColor, textColor, press}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 5,
        marginVertical: 10

      }} onPress={press}>
      <Text style = {{color: textColor , fontSize: 25 , fontWeight: 'bold'}}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({});
