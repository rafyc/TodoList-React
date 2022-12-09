import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AuthForm from '../Components/AuthForm';
import Navlink from '../Components/Navlink';
import { Context as AuthContext } from '../Context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';


const LoginScreen = ({ navigation }) => {
  const { state, login, clearError } = useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => { clearError })
  )
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Log in to your account'
        submitButtonText='Log In'
        onSubmit={login}
        errorMessage={state.errorMessage}
      ></AuthForm>
      <View style={styles.navContainer}>
        <Navlink
          routeName='Signup'
          text='Dont have an account ?'
          navigation={navigation}
        />
        <Text style={styles.bold}>Sign up</Text>
      </View>
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
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  bold: {
    paddingLeft: 5,
    color: 'blue',
    fontWeight: "800",
    fontSize: 16
  },
  navlink: {
  }
})

export default LoginScreen;
