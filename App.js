import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlace from './screens/AllPlace';
import AddPlace from './screens/AddPlace';
import Icons from './components/ui/Icons';
import { Colors } from './constants/colors';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
   <>
   <StatusBar style='dark' />
   <NavigationContainer>
    <stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: Colors.primary500},
      headerTintColor: Colors.gray700,
      contentStyle:{ backgroundColor: Colors.gray700}
    }}>
      <stack.Screen 
      name='AllPlaces' 
      component={AllPlace}
      options={({navigation}) => ({
        title: 'Your Favorite Places',
        headerRight:({ tintColor }) =>(
          <Icons icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('AddPlaces')} />
        )

      })}/>
      <stack.Screen 
      name='AddPlaces' 
      component={AddPlace}
      options={{
        title: 'Add new place'
      }}/>
    </stack.Navigator>
   </NavigationContainer>
   </>
  );
}


