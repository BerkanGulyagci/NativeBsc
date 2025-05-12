import { Pressable, StyleSheet, Text } from 'react-native'

const CustomButton = ({buttonText, setWidth, handleOnPress, buttonColor, pressedButtonColor}) => {
  return (
    <Pressable
      onPress={() => handleOnPress()}  
      style={({ pressed }) => [
        { backgroundColor: pressed ? pressedButtonColor : buttonColor ,
            width: setWidth,
        }, styles.button
    ]}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({


     buttonText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  button:{
    height: 50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20,
  },
})