import React, { useContext, useEffect } from 'react';
import { Context as TaskContext } from './../Context/TaskContext'
import TaskForm from '../Components/TaskForm';

const TaskScreen = () => {

  const { getTasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
    console.log('useEffect');
  }, [])
  return (
    <>
      <TaskForm
        title='My Task'
      ></TaskForm>
    </>
  )

}
export default TaskScreen;
