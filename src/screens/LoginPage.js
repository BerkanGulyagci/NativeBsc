import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Loading from "../../src/comps/Loading";
const LoginPage = () => {
  const [name,setName]=useState("")
  const [lastName,setLastName]=useState("")
    const [result,setResult]=useState("")
  const [isLoading,setIsloading]=useState(false)


  return (
    <View style={styles.container}>
     
 <Image 
  source={require('../../assets/images/loginicon.png')}
  style={styles.image}
/>


        






            <Text style={styles.welcome}>Welcome {name}</Text>

      <Text>Email</Text>
      <TextInput
      inputMode='email'
        placeholder="Enter Your Email"
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />

      <Text>Password</Text>
      <TextInput
      secureTextEntry={true}
        placeholder="Enter Your Password"
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}
      />

<Pressable
  onPress={() => setIsloading(true)}  
  style={({ pressed }) => [
    { backgroundColor: pressed ? 'gray' : 'lightblue' }, styles.button
  ]}
>
  <Text style={styles.buttonText}>Login</Text>
</Pressable>

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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textInputStyle: {
  borderWidth: 1,
  width: '80%',
  height: 50,
  borderRadius:10,
  marginVertical:10,
  textAlign:'center',
  color:'blue',
  },
  button:{
width: '80%',
height: 50,
borderRadius:10,
alignItems:'center',
justifyContent:'center',
backgroundColor:'lightblue',
  },
  buttonText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  image:{
    width: 150,
    height: 150,
   
  },
  welcome:{
    fontSize: 26, 
    fontWeight: 'bold',},

});
