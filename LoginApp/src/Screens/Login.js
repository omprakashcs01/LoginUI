import {View, Text, TextInput, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkGreen} from '../constants';
import InputText from '../InputText';
import Btn from '../btn';

const Login = (props) => {
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
          Login
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
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', marginBottom: 20}}>
            Login Your account
          </Text>
          <InputText placeholder="Email" keyboardType={'email-address'} />
          <InputText placeholder="Password" secureTextEntry = {true} />

          <View style = {{alignItems: 'flex-end' , width: '50%', marginLeft: 25,
        marginBottom: 200
        }}><TouchableOpacity
     onPress={()=> props.navigation.navigate('ForgetPassword')}
        >
            <Text style ={{color: darkGreen, fontWeight: 'bold' , fontSize: 18}}>
              Forget Password?
            </Text>
            </TouchableOpacity>
          </View>
          <Btn textColor='white' bgColor={darkGreen}  btnText = 'Login'/>
          <View style = {{ display: 'flex', flexDirection : 'row', justifyContent: 'center',  }}>
            <Text style = {{fontSize: 16, fontWeight: 'bold'}}>
                Don't have an account? 
            </Text>
            <TouchableOpacity 
            
            onPress={()=> props.navigation.navigate('SignUp')}
            
            >
            <Text style ={{paddingHorizontal : 5, color: darkGreen, fontWeight: 'bold'}}>
               Sign up
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
