import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import React, { useState } from 'react';
import Spacer from './Spacer';



const AuthForm = ({ submitButtonText, headerText, onSubmit, errorMessage }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <View style={styles.contianer}>
          <Text h3 style={styles.title}>{headerText}</Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}>
          </Input>

          <Input placeholder='Password'
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry>
          </Input>
          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
          <Spacer>
            <Button title={submitButtonText} onPress={() => onSubmit({ email, password })}></Button>
          </Spacer>
        </View >
      </Spacer>
    </>


  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 50,
    alignItems: 'center',
    textAlign: 'center'

  },
  contianer: {
    justifyContent: 'center',

  },
  errorMessage: {
    fontSize: 16,
    fontWeight: "800",
    color: 'red',
    marginLeft: 15,
    marginBottom: 10,

  },
})
export default AuthForm;
