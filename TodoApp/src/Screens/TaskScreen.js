import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Avatar } from '@rneui/base';
import { Context as AuthContext } from '../Context/AuthContext';


const TaskScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <View style={styles.container}>
        <Text h3>Task Screen</Text>
        <View style={styles.addIcon}>
          <Avatar
            size={52}
            rounded
            icon={{ name: "add", type: "material" }}
            containerStyle={{ backgroundColor: "#008ddf" }}
          />
        </View>
      </View>
      <Button style={styles.signoutBtn} onPress={logout} title={'Sign out'} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  signoutBtn: {
    alignSelf: 'flex-end'
  },
  addIcon: {
    alignSelf: 'flex-end',
    flexDirection: 'column-reverse',
    flex: 1,
    padding: 20,
  }
})

export default TaskScreen;


