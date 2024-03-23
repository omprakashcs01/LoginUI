import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

export default function Background({children}) {
  return (
    <View>
    <ImageBackground  style = {{height: '100%'}}source={require('../../assets/leaves.jpg')}/>
    <View style = {{position: "absolute"}}>
        {children}
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({})