import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


const NavLink = ({ navigation, text, routeName }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16

  }
});

export default NavLink;
