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
    case 'check_task':
      return { ...state, finished: action.payload }
    default: state
  }
}

const getTasks = (dispatch) => async () => {
  try {
    const res = await api.get("/tasks")
    dispatch({ type: "get_tasks", payload: res.data });
  } catch (error) {
    console.log(error);
  }
}

const addTask = (dispatch) => async (task) => {
  try {
    const res = await api.post('/tasks', { name: task }).then(async () => {
      const res = await api.get("/tasks")
      dispatch({ type: "get_tasks", payload: res.data });
    })
    dispatch({ type: 'add_task', payload: res.data.name });
  } catch (error) {
    (error)
  }
}

const deleteTask = dispatch => async (id) => {
  try {

    await api.delete(`/tasks/${id}`).then(async () => {
      dispatch({ type: 'delete_task' })

      const res = await api.get("/tasks")
      dispatch({ type: "get_tasks", payload: res.data });
    })
  } catch (error) {
    console.log(error);
  }
}

const editTask = (dispatch) => async (task, id) => {
  try {

    await api.patch(`/tasks/${id}`, { name: task }).then(async () => {
      dispatch({ type: 'edit_task', payload: task })

      const res = await api.get("/tasks")
      dispatch({ type: "get_tasks", payload: res.data });
    })



  } catch (error) {
    console.log(error);
  }
}

const checkTask = (dispatch) => async (status, id) => {
  try {
    console.log(`task checking id : ${id}`);
    console.log(`task checking status : ${status}`);
    await api.patch(`/tasks/${id}`, { finished: status }).then(async () => {
      dispatch({ type: 'check_task', payload: status })
      const res = await api.get("/tasks")
      dispatch({ type: "get_tasks", payload: res.data });
    })



  } catch (error) {
    console.log(error);
  }
}

export const { Context, Provider } = createDataContext(
  taskReducer,
  { addTask, deleteTask, editTask, getTasks, checkTask },
  []
);

