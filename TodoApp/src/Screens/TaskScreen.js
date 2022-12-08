import React, { useContext, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Button, Text, Avatar } from '@rneui/base';
// import { Input } from '@rneui/themed';
import { Context as AuthContext } from '../Context/AuthContext';
import Spacer from '../Components/Spacer';
import { Context as TaskContext } from '../Context/TaskContext';



const TaskScreen = () => {
  const { logout } = useContext(AuthContext);
  const [task, setTask] = useState('')
  const [showInput, setShowInput] = useState(false);

  const { state, addTask } = useContext(TaskContext);

  const handleClick = () => {
    setShowInput(true);
  }

  const handleSubmit = () => {
    setShowInput(false)
    addTask()
  }

  return (
    <>
      <View style={styles.container}>
        <Text h3 style={styles.h3} >Task Screen</Text>
        <Spacer>
          {showInput ? <TextInput
            style={styles.input}
            placeholder="What needs to be done ?"
            value={task}
            autoFocus
            onChangeText={setTask}
            onSubmitEditing={handleSubmit}
          >
          </TextInput> : null}
          <FlatList
            data={state}
            keyExtractor={tasks => tasks.title}
            renderItem={({ item }) => {
              return <Text>{item.title}</Text>
            }}
          />
        </Spacer>


        <View style={styles.addIcon}>
          <TouchableOpacity
            onPress={handleClick}
          >
            <Avatar
              size={52}
              rounded
              icon={{ name: "add", type: "material" }}
              containerStyle={{ backgroundColor: "#008ddf" }}

            />
          </TouchableOpacity>
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
  },
  signoutBtn: {
    alignSelf: 'flex-end'
  },
  addIcon: {
    alignSelf: 'flex-end',
    flexDirection: 'column-reverse',
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  h3: {
    alignSelf: 'center'
  },
})

export default TaskScreen;


