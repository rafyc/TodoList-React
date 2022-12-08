import createDataContext from "./createDataContext";

const taskReducer = (state, action) => {
  switch (action, type) {
    case 'add_task':
      return { ...state, }
    case 'delet_task':
      return
    case 'edit_task':
      return
    default: state
  }
}


const addTask = (dispatch) => {
  return () => {
    dispatch({ type: 'add_task' })
  }
}

const deletTask = () => {

}

const editTask = () => {

}



export const { Context, Provider } = createDataContext(
  taskReducer,
  { addTask, deletTask, editTask },
  []
);

