import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import Background from './Background';

import Btn from '../btn';
import InputText from '../InputText';
import {darkGreen} from '../constants';

const SignUp = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginBottom: 20,
            fontWeight: 'bold',
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 470,
            borderTopLeftRadius: 150,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <InputText placeholder="First Name" keyboardType={'email-address'} />
          <InputText placeholder="Last Name" />
          <InputText placeholder="Contact Number" keyboardType={'number-pad'} />
          <InputText placeholder="Password" secureTextEntry={true} />
          <InputText placeholder="Conform Password" />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '50%',
              marginRight: 120,
            }}>
            <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 14}}>
              by signing in, you are to agree to our{' '}
            </Text>

            <TouchableOpacity>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 15}}>
                Terms & Condition{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '50%',

              marginBottom: 10,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 14}}>
              and{' '}
            </Text>
            <TouchableOpacity>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 15}}>
                Privacy policy{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnText="SignUp"
            press={() => {
              Alert.alert('Alert Title', 'My Alert Msg');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account?
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

export default SignUp;

const styles = StyleSheet.create({});
