import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AuthForm from '../Components/AuthForm';
import Navlink from '../Components/Navlink';
import { Context as AuthContext } from '../Context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';


const LoginScreen = ({ navigation }) => {
  const { state, login, clearError } = useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => {
      clearError()
      return () => '';
    }, [])
  );

  return (
    <View style={styles.container}>
      <Shadow distance={45} style={styles.Shadow}>
        <Image
          style={styles.tinyLogo}
          source={require('./../assets/logo-kick.png')}
        />
        <Image />
      </Shadow>
      <AuthForm style={styles.auth}
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
        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
          <Text style={styles.bold}>Sign up</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: '#2A3260'
  },
  Shadow: {
    borderRadius: 30
  },
  tinyLogo: {
    width: 100,
    height: 100,
    justifyContent: "center",

  },
  auth: {
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  bold: {
    paddingLeft: 5,
    color: '#75CAE8',
    fontWeight: "800",
    fontSize: 16
  },
  navlink: {
  }
})

export default LoginScreen;
