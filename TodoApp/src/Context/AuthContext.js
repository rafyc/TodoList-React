import trackerApi from '../api/api'
import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as navigationRef from '../navigationRef';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { token: action.payload, errorMessage: '' };
    case 'logout':
      return;
    default:
      return state;
  }
}
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigationRef.navigate('Task')
  } else {
    navigationRef.navigate('Signup')
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const res = await trackerApi.post("/signup", { email, password });
    dispatch({ type: "login", payload: res.data.token });
    await AsyncStorage.setItem("token", res.data.token);
    dispatch({ type: "signin", payload: res.data.token });
    navigationRef.navigate('Login')


  } catch (error) {
    console.log(error);
  }

};

const login = dispatch => async ({ email, password }) => {
  try {
    const res = await trackerApi.post("/signin", { email, password });
    dispatch({ type: "login", payload: res.data.token });
    navigationRef.navigate('Task')

  } catch (error) {
    console.log(error);
  }

};

const logout = dispatch => async ({ email, password }) => {
  await trackerApi.post("/signin", { email, password });
  dispatch({ type: "logout", payload: response.data.token })
};



export const { Provider, Context } = createDataContext(authReducer,
  { signup, login, logout, tryLocalSignin },
  { token: null, errorMessage: "" }
)
