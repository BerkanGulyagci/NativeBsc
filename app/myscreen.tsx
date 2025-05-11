import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MyScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎨 Bu senin kendi sayfan canım!</Text>
      <Button title="Geri Dön" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
