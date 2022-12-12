import React, { useContext, useEffect } from 'react';
import { Context as TaskContext } from './../Context/TaskContext'
import TaskForm from '../Components/TaskForm';




const TaskScreen = () => {
  const { state, getTasks } = useContext(TaskContext);

  // useEffect(() => {
  //   getTasks();
  // }, []);

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
