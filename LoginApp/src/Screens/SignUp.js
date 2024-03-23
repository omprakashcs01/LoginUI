import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Background from './Background';

import Btn from '../btn';
import InputText from '../InputText';
import {darkGreen} from '../constants';

const SignUp = props => {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [error, setError] = useState({});
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const ValidateForm = () => {
    let errors = {};

    if (!name) errors.name = 'Name must be provided';
    if (!lastName) errors.lastName = 'Last name must';
    if (!password) errors.password = ' Password must be provided';
    if (!phone) errors.phone = 'Contact Number must  be provided';

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (ValidateForm()) {
      setName('');
      setLastName('');
      setPassword('');
      setPhone('');

      setError({});
    }
  };

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
          Create a new account {name}
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 470,
            borderTopLeftRadius: 150,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <InputText
            placeholder="First Name"
            keyboardType={'email-address'}
            value={name}
            onChangeText={setName}
          />
          {error.name ? <Text style={{color: 'red'}}>{error.name}</Text> : null}
          <InputText
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          {error.lastName ? (
            <Text style={{color: 'red'}}>{error.lastName}</Text>
          ) : null}
          <InputText
            placeholder="Contact Number"
            keyboardType={'number-pad'}
            value={phone}
            onChangeText={setPhone}
          />
          {error.phone ? (
            <Text style={{color: 'red'}}>{error.phone}</Text>
          ) : null}
          <InputText
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {error.password ? (
            <Text style={{color: 'red'}}>{error.password}</Text>
          ) : null}
          <InputText
            placeholder="Conform Password"
            value={password}
            onChangeText={setPassword}
          />
          {error.password ? (
            <Text style={{color: 'red'}}>{error.password}</Text>
          ) : null}
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
            press={handleSubmit}
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
