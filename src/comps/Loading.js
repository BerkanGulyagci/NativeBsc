import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

const Loading = (props) => {
  return (
    <View style={styles.container}>
        <Pressable 
        onPress={() => props.changeIsLoading()}
           
        
        style={[{} , styles.closeseButtonContiner]}>
             <Text style={styles.closeButton}>X</Text></Pressable>
       
        <ActivityIndicator size={'large'} color={'blue'} />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor:'tomato',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
loginText: {
    fontWeight: 'bold',
fontSize: 16,
color: 'white',
marginTop: 10,
    
    },
    closeButton: {
       color: 'white',
         fontSize: 16,
            fontWeight: 'bold',

    },
      closeseButtonContiner: {
        width: 50,
        height: 50,
        borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      position: 'absolute',
      top: 50,
      right: 10,
    },


});
