import React from 'react';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import TaskScreen from './src/Screens/TaskScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as AuthProvider } from './src/Context/AuthContext';
import ResolveAuthScreen from './src/Screens/ResolveAuthScreen';
import { navigationRef } from './src/navigationRef';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Ath' component={ResolveAuthScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Task" component={TaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>

  );
}

export default App;
