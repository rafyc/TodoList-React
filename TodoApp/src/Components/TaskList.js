import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { color, ListItem, CheckBox } from '@rneui/base';
import { Context as TaskContext } from '../Context/TaskContext';
import { Icon } from '@rneui/themed';


const TaskList = ({ handleEdit }) => {
  const { state, deleteTask, checkTask, getTasks } = useContext(TaskContext);

  const onPress = (status, id) => {
    checkTask(status, id)
  }

  // const copy = [...state._id]
  // console.log(`iciiiiiii ${state}`);





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
                    <TouchableOpacity
                      onPress={() =>
                        onPress(!item.finished, item._id)
                      }
                    >
                      {!item.finished ? (
                        <Icon style={styles.taskCheckIcon}
                          name='check-square'
                          type='feather'
                          color='#2A3260'
                        />
                      ) : (
                        <Icon style={styles.taskCheckIcon}
                          name='check-square'
                          type='feather'
                          color='#00eb2c'
                        />
                      )
                      }{/* /* Green */}
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#2A3260',


  },
  list: {
    marginTop: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  taskIcon: {
    flexDirection: 'row',
    paddingRight: 20,
  },
  taskCheckIcon: {
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

})




export default TaskList;
