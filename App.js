import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigation from './src/navigation/RootNavigation';
const Stack = createNativeStackNavigator();


const App = () => {
  return <RootNavigation/>
}

export default App



