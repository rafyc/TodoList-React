import React, { useContext, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Button, Text, Avatar } from '@rneui/base';
import { Context as AuthContext } from '../Context/AuthContext';
import Spacer from '../Components/Spacer';
import { Context as TaskContext } from '../Context/TaskContext';
import { Shadow } from 'react-native-shadow-2';
import TaskList from './TaskList';





const TaskForm = ({ title }) => {
  const { logout } = useContext(AuthContext);
  const [task, setTask] = useState('')
  const [showInput, setShowInput] = useState(false);
  const [taskId, setTaskId] = useState('');
  const [editInput, setEditInput] = useState(false);
  const { editTask, addTask } = useContext(TaskContext);



  const handleClick = () => {
    setShowInput(true);
  }
  const handleSubmit = () => {
    setShowInput(false);
    addTask(deletNum(task));
    setTask('')
  }
  const handleSubmitEdit = () => {
    setEditInput(false);
    editTask(deletNum(task), taskId)
    setTask('')
  }
  const handleEdit = (name, id) => {
    setEditInput(true);
    setTask(name);
    setTaskId(id);
  };

  const deletNum = (task) => {
    let candidate = task
    return candidate.replace(/[^A-Za-z]/g, '')
  }
  return (
    <>
      <View style={styles.container}>
        <Text h3 style={styles.h3} >{title}</Text>
        <Spacer>
          <>

            {editInput ? <TextInput
              style={styles.input}
              keyboardType="visible-password"
              placeholderTextColor='white'
              placeholder=""
              value={task}
              maxFontSizeMultiplier={1}
              autoFocus
              onChangeText={setTask}
              onSubmitEditing={handleSubmitEdit}>
            </TextInput> : null}

            {showInput ? <TextInput
              style={styles.input}
              keyboardType="visible-password"
              placeholderTextColor='white'
              placeholder="What needs to be done ?"
              value={task}
              maxFontSizeMultiplier={1}
              autoFocus
              onChangeText={setTask}
              onSubmitEditing={handleSubmit}>
            </TextInput> : null}
            <TaskList
              handleEdit={handleEdit} />
          </>
        </Spacer>
        <View style={styles.addIcon}>
          <TouchableOpacity
            onPress={handleClick}>
            <Shadow style={styles.Shadow}>
              <Avatar
                size={52}
                rounded
                icon={{ name: "add", type: "material", color: '#2A3260' }}
                containerStyle={{ backgroundColor: "#75CAE8" }}
              />
            </Shadow>
          </TouchableOpacity>
        </View>
      </View>
      <Button color='#75CAE8' titleStyle={{ color: '#2A3260' }} style={styles.signoutBtn} onPress={logout} title={'Sign out'} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#2A3260',
  },
  Shadow: {
    borderRadius: 55,
    elevation: 50,
    distance: 0
  },
  addIcon: {
    alignSelf: 'flex-end',
    flexDirection: 'column-reverse',
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#75CAE8',
    fontSize: 20,

  },
  h3: {
    alignSelf: 'center',
    color: 'white',
    flex: 1,

  },
})

export default TaskForm;
