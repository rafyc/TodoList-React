import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { ListItem } from '@rneui/base';
import { Context as TaskContext } from '../Context/TaskContext';


import { Icon } from '@rneui/themed';


const TaskList = ({ handleEdit }) => {
  const { state, deleteTask } = useContext(TaskContext);

  return (
    <>

      <FlatList
        style={styles.listContainer}
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (

            <TouchableOpacity onPress={() => handleEdit(item.name, item._id)}>
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





export default TaskList;
