import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Spacer from './Spacer';
import { useNavigation } from '@react-navigation/native';


const NavLink = ({ navigation, text, routeName }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 16

  }
});

export default NavLink;
