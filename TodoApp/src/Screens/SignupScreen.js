import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AuthForm from '../Components/AuthForm';
import { Context as AuthContext } from '../Context/AuthContext';


const SignupScreen = () => {
  const { signup } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Create an account'
        submitButtonText='Sign up'
        onSubmit={signup}
        errorMessage={''}
      ></AuthForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default SignupScreen;
