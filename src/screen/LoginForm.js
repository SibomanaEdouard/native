import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  label
} from "react-native";
export default function LoginForm({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // this is to handle register
  const handleRegister=()=>{
    navigation.navigate('Register');
  }

  //this is the function to handle login
  const handleLogin=()=>{
    if(email!=null && password!=null){
      console.log('The data submitted are : ' +
        email,
        password

       )
       navigation.navigate('Home');

    }else{
      console.log("Please all credentials are required!");
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Login to our beautiful app</Text>
      <View style={styles.inputView}>
      {/* <Text style={styles.label}>Email</Text> */}
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>

      <View style={styles.inputView}>
      {/* <Text style={styles.label}>password</Text> */}
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
       
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text> 
     
      </TouchableOpacity> 

      <TouchableOpacity onPress={handleRegister}>
      <Text>
          Do you have account ? SIGN UP
        </Text>
        </TouchableOpacity>

    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
  },
  label:{
      fontSize: 16,
      marginBottom: 5,
      color: '#003f5c',

  },
});