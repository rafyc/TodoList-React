import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { } from 'react-native-gesture-handler';
import AuthForm from '../Components/AuthForm';
import Navlink from '../Components/Navlink';
import { Context as AuthContext } from '../Context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';



const SignupScreen = ({ navigation }) => {
  const { state, signup, clearError } = useContext(AuthContext);
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
        headerText='     Create an account     '
        submitButtonText='Sign up'
        onSubmit={signup}
        errorMessage={state.errorMessage}
      ></AuthForm>
      <View style={styles.navContainer}>
        <Navlink style={styles.nav}
          routeName='Login'
          text='Already have an account ?'
          navigation={navigation}
        />
        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
          <Text style={styles.bold}>Sign in</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    backgroundColor: '#2A3260',
  },
  auth: {

  },
  bold: {
    paddingLeft: 5,
    color: '#75CAE8',
    fontWeight: "800",
    fontSize: 16
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    justifyContent: "center",

  },
  Shadow: {
    borderRadius: 30
  },
})

export default SignupScreen;
