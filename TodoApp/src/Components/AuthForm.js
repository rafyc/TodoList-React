import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { useState } from 'react';
import Spacer from './Spacer';



const AuthForm = ({ submitButtonText, headerText }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
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

      <Spacer>
        <Button title={submitButtonText}></Button>
      </Spacer>

    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 50,
  },
  contianer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default AuthForm;
