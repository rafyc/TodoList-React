import React, { useContext, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Button, Text, Avatar, ListItem } from '@rneui/base';
// import { Input } from '@rneui/themed';
import { Context as AuthContext } from '../Context/AuthContext';
import Spacer from '../Components/Spacer';
import { Context as TaskContext } from '../Context/TaskContext';
import { Shadow } from 'react-native-shadow-2';
import { Icon } from '@rneui/themed';





const TaskForm = ({ title, tasks }) => {
  const { logout } = useContext(AuthContext);
  const [task, setTask] = useState('')
  const [showInput, setShowInput] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editText, setEditText] = useState(false);
  const { addTask, deleteTask, editTask } = useContext(TaskContext);


  const handleClick = () => {
    setShowInput(true);
  }

  const handleSubmit = () => {
    setShowInput(false);
    addTask({ task });
    setTask('')
  }

  const handleEdit = () => {
    setShowEdit(true)
  };

  const handleSubmitEdit = () => {
    editTask(editText)
    setShowEdit(false)
  };

  // const handleDelete = () => {
  //   deletTask({ taskId });
  // }


  return (
    <>
      <View style={styles.container}>
        <Text h3 style={styles.h3} >{title}</Text>
        <Spacer>
          <>
            {showEdit ? <TextInput
              style={styles.input}
              placeholderTextColor='white'
              placeholder={''}
              value={editText}
              autoFocus
              onChangeText={setEditText}
              onSubmitEditing={handleSubmitEdit}
            >
            </TextInput> : null}

            {showInput ? <TextInput
              style={styles.input}
              placeholderTextColor='white'
              placeholder="What needs to be done ?"
              value={task}
              autoFocus
              onChangeText={setTask}
              onSubmitEditing={handleSubmit}
            >
            </TextInput> : null}
            <FlatList
              style={styles.listContainer}
              data={tasks}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return (

                  <TouchableOpacity onPress={handleEdit}>
                    <ListItem style={styles.list}>
                      <ListItem.Content >
                        <View style={styles.taskContainer}>
                          <TouchableOpacity
                            onPress={() => deleteTask(item._id)}>
                            <Icon style={styles.taskIcon}
                              name='trash-2'
                              type='feather'
                              color='#2A3260' />
                          </TouchableOpacity>
                          <ListItem.Title>{item.name}</ListItem.Title>
                        </View>
                      </ListItem.Content>

                      <ListItem.Chevron />
                    </ListItem>
                  </TouchableOpacity>
                );
              }}
            />
          </>
        </Spacer>
        <View style={styles.addIcon}>
          <TouchableOpacity
            onPress={handleClick}
          >
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
  list: {
    paddingTop: 15
  },
  taskIcon: {
    flexDirection: 'row',
    paddingRight: 20,
  },
  taskContainer: {
    flexDirection: 'row'
  },
  signoutBtn: {
    alignSelf: 'flex-end',

  },
  listContainer: {
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
  },
  h3: {
    alignSelf: 'center',
    color: 'white',
    flex: 1,

  },
})

export default TaskForm;


