import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CustomButton, CustomTextInput, Loading } from '../comps/index';
const LoginPage = ({navigation}) => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [result,setResult]=useState("")
  const [isLoading,setIsloading]=useState(false)


  return (
    <View style={styles.container}>
                 <Text style={styles.welcome}>Welcome {email}</Text>

 <Image 
  source={require('../../assets/images/loginicon.png')}
  style={styles.image}
/>



<CustomTextInput
  title="Email"
  isSecureText={false}
  handleOnChangeText={setEmail}
  handleValue={email}
  handlePlaceholder="Enter Your Email"
/>

<CustomTextInput
  title="Password"
  isSecureText={true}
  handleOnChangeText={setPassword}
  handleValue={password}
  handlePlaceholder="Enter Your Password"

/>

<CustomButton
buttonText="Login"
setWidth="80%"
handleOnPress={() => setIsloading(true)}
buttonColor="#4682b4"
pressedButtonColor="lightblue"
/>

<CustomButton
buttonText="Sign Up"
setWidth="30%"
handleOnPress={() => navigation.navigate('SignUp')}
buttonColor="#008080"
pressedButtonColor="lightblue"


/>



{isLoading ? 
  <Loading
    name="ButtonName"
    changeIsLoading={() => setIsloading(false)}
  /> 
: null}








    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image:{
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcome:{
    fontSize: 26, 
    fontWeight: 'bold',
  marginBottom:30,
  },
    signUpButton:{
      width: '30%',
      height: 50,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    },


});
