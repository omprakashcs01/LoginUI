import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkGreen} from '../constants';
import InputText from '../InputText';
import Btn from '../btn';
const ForgetPassword = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 44,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Forget & RestYour Password?
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 470,
            borderTopLeftRadius: 150,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Rest Password
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
            Enter your email address below and we'll {'\n'} send you a link to
            reset your password.
          </Text>
          <InputText placeholder="Email" keyboardType={'email-address'} />

          <View
            style={{
              alignItems: 'flex-end',
              width: '50%',
              marginLeft: 25,
              marginBottom: 20,
            }}></View>
          <Btn textColor="white" bgColor={darkGreen} btnText="Rest" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Password remember
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{
                  paddingHorizontal: 5,
                  color: darkGreen,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
