import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AuthForm from '../Components/AuthForm';
import Navlink from '../Components/Navlink';
import { Context as AuthContext } from '../Context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Log in to your account'
        submitButtonText='Log In'
        onSubmit={login}
        errorMessage={''}
      ></AuthForm>
      <Navlink
        routeName='Signup'
        text='Dont have an account ? Sign up'
        navigation={navigation}
      />
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
})

export default LoginScreen;
