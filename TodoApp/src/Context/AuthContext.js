import api from '../api/api'
import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as navigationRef from '../navigationRef';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { token: action.payload, errorMessage: '' };
    case 'logout':
      return { token: null, errorMessage: '' }
    case 'add_err':
      return { ...state, errorMessage: action.payload };
    case 'clear_err':
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
}
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "login", payload: token });
    navigationRef.navigate('Task')
  } else {
    navigationRef.navigate('Signup')
  }
};

const clearError = (dispatch) => () => {
  dispatch({ type: 'clear_err' });
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const res = await api.post("/signup", { email, password });
    await AsyncStorage.setItem("token", res.data.token);
    dispatch({ type: "login", payload: res.data.token });
    navigationRef.navigate('Login')

  } catch (error) {
    dispatch({
      type: 'add_err',
      payload: "Something went wrong with sign up",
    })
  }
};

const login = dispatch => async ({ email, password }) => {


  try {
    const res = await api.post("/signin", { id: email, password });

    await AsyncStorage.setItem("token", res.data.token);
    dispatch({ type: "login", payload: res.data.token });
    navigationRef.navigate('Task')

  } catch (error) {
    dispatch({
      type: 'add_err',
      payload: "Something went wrong with log in",
    })
  };
}

const logout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({
    type: "signout",
  })
  navigationRef.navigate('Login')
};




export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout, tryLocalSignin, clearError },
  { token: null, errorMessage: "" }
)
