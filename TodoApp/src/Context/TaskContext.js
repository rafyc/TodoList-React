import createDataContext from "./createDataContext";
import api from './../api/api'

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'get_tasks':
      return action.payload
    case 'add_task':
      return { ...state, name: action.payload }
    case 'delet_task':
      return { ...state }
    case 'edit_task':
      return { ...state, name: action.payload }
    default: state
  }
}

const getTasks = async (dispatch) => {
  try {
    const res = await api.get("/tasks")
    dispatch({ type: "get_tasks", payload: res.data });
  } catch (error) {
    console.log(error);
  }
}

const addTask = (dispatch) => async ({ task }) => {
  try {
    const res = await api.post('/tasks', { name: task })
    dispatch({ type: 'add_task', payload: res.data.name });
  } catch (error) {
    (error)
  }
}

const deleteTask = dispatch => async (id) => {
  console.log(id)
  try {
    api.delete(`/tasks/${id}`)
    dispatch({ type: 'delete_task' })
  } catch (error) {
    console.log(error);
  }

}

const editTask = (dispatch) => async (task, id) => {
  try {
    console.log({ task });
    api.patch(`/tasks/${id}`, { name: task })
    dispatch({ type: 'edit_task', payload: task })

  } catch (error) {
    console.log(error);
  }
}



export const { Context, Provider } = createDataContext(
  taskReducer,
  { addTask, deleteTask, editTask, getTasks },
  { name: '', id: '' }
);

