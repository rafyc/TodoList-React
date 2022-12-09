import React from 'react';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import TaskScreen from './src/Screens/TaskScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as AuthProvider } from './src/Context/AuthContext';
import ResolveAuthScreen from './src/Screens/ResolveAuthScreen';
import { navigationRef } from './src/navigationRef';
import { Provider as TaskProvider } from './src/Context/TaskContext';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Auth' component={ResolveAuthScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Task" component={TaskScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
