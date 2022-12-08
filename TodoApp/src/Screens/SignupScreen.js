import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AuthForm from '../Components/AuthForm';
import Navlink from '../Components/Navlink';
import { Context as AuthContext } from '../Context/AuthContext';


const SignupScreen = ({ navigation }) => {
  const { state, signup, clearError } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Create an account'
        submitButtonText='Sign up'
        onSubmit={signup}
        errorMessage={state.errorMessage}
      ></AuthForm>
      <Navlink
        routeName='Login'
        text='Already have an account ? Login'
        navigation={navigation}
      />
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default SignupScreen;
