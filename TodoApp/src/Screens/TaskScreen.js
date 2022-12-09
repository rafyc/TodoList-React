import { Text } from '@rneui/themed';
import React, { useContext } from 'react';
import { Context as TaskContext } from './../Context/TaskContext'
import TaskForm from '../Components/TaskForm';




const TaskScreen = () => {
  const { state } = useContext(TaskContext);
  return (
    <>

      <TaskForm
        title='My Task'
        tasks={state}
      ></TaskForm>
    </>
  )

}
export default TaskScreen;

  //   const { logout } = useContext(AuthContext);
  //   const [task, setTask] = useState('')
  //   const [showInput, setShowInput] = useState(false);

  //   const { state, addTask } = useContext(TaskContext);

  //   const handleClick = () => {
  //     setShowInput(true);
  //   }

  //   const handleSubmit = () => {
  //     setShowInput(false)
  //     // addTask()
  //   }

  //   return (
  //     <>
  //       <View style={styles.container}>
  //         <Text h3 style={styles.h3} >Task Screen</Text>
  //         <Spacer>
  //           {showInput ? <TextInput
  //             style={styles.input}
  //             placeholderTextColor='white'
  //             placeholder="What needs to be done ?"
  //             value={task}
  //             autoFocus
  //             onChangeText={setTask}
  //             onSubmitEditing={handleSubmit}
  //           >
  //           </TextInput> : null}
  //           <FlatList
  //             data={state}
  //             keyExtractor={tasks => tasks.title}
  //             renderItem={({ item }) => {
  //               return <Text>{item.title}</Text>
  //             }}
  //           />
  //         </Spacer>


  //         <View style={styles.addIcon}>
  //           <TouchableOpacity
  //             onPress={handleClick}
  //           >
  //             <Shadow style={styles.Shadow}>
  //               <Avatar
  //                 size={52}
  //                 rounded
  //                 icon={{ name: "add", type: "material", color: '#2A3260' }}
  //                 containerStyle={{ backgroundColor: "#75CAE8" }}
  //               />
  //             </Shadow>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //       <Button color='#75CAE8' titleStyle={{ color: '#2A3260' }} style={styles.signoutBtn} onPress={logout} title={'Sign out'} />
  //     </>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     textAlign: 'center',
  //     backgroundColor: '#2A3260'

  //   },
  //   signoutBtn: {
  //     alignSelf: 'flex-end',

  //   },
  //   Shadow: {
  //     borderRadius: 55,
  //     elevation: 50,
  //     distance: 0
  //   },
  //   addIcon: {
  //     alignSelf: 'flex-end',
  //     flexDirection: 'column-reverse',
  //     flex: 1,
  //     padding: 20,

  //   },
  //   input: {
  //     borderBottomWidth: 1,
  //     borderBottomColor: '#75CAE8',
  //   },
  //   h3: {
  //     alignSelf: 'center',
  //     color: 'white'
  //   },
  // })


