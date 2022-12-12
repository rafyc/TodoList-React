import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { color, ListItem, CheckBox } from '@rneui/base';
import { Context as TaskContext } from '../Context/TaskContext';
import { Icon } from '@rneui/themed';


const TaskList = ({ handleEdit }) => {
  const { state, deleteTask, checkTask } = useContext(TaskContext);

  // const [isChecked, setIsChecked] = useState(state.finished);

  // const check = () => {
  //   ;
  //   setIsChecked(!state);
  //   checkTask(state, id)
  // }



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
                      onPress={() => {
                        // setIsChecked(!isChecked)
                        // checkTask(isChecked, item._id)
                        // console.log(isChecked);
                      }}>
                      {/*!isChecked */'' ? <Icon style={styles.taskCheckIcon}
                        name='check-square'
                        type='feather'
                        color='#2A3260' /> : <Icon style={styles.taskCheckIcon}
                          name='check-square'
                          type='feather'
                          color='#00eb2c' />}
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
