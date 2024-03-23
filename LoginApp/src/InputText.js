import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { darkGreen } from './constants'

const InputText = (props) => {
  return (
<TextInput 
 {...props} style ={{borderRadius: 100,
 color: darkGreen , paddingHorizontal:10,
  width: '60%',
   backgroundColor: 'rgb(220, 220, 220)',
   marginVertical: 10
 }} 
 placeholderTextColor={darkGreen}
>

</TextInput>
  )
}

export default InputText

const styles = StyleSheet.create({})