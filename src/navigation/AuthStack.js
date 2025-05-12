
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { LoginPage, SignUpPage } from '../screens';


const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Login'
    screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="SignUp" component={SignUpPage}/>
    </Stack.Navigator>
  )
}


export default AuthStack

const styles = StyleSheet.create({})