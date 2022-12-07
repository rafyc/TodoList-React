import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AuthForm from '../Components/AuthForm';
import Navlink from '../Components/Navlink';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Log in to your account'
        submitButtonText='Log In'
        onSubmit={''}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
})

export default LoginScreen;
