import trackerApi from '../api/api'
import createDataContext from './createDataContext';

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

const signup = dispatch => async ({ email, password }) => {
  try {
    await trackerApi.post("/signup", { email, password });
    dispatch({ type: "login", payload: response.data.token });

  } catch (error) {

  }

};

const login = dispatch => async ({ email, password }) => {
  try {
    await trackerApi.post("/signin", { email, password });
    dispatch({ type: "login", payload: response.data.token });

  } catch (error) {

  }

};

const logout = dispatch => async ({ email, password }) => {
  await trackerApi.post("/signin", { email, password });
  dispatch({ type: "logout", payload: response.data.token })
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

export const { Provider, Context } = createDataContext(authReducer,
  { signup, login, logout, tryLocalSignin },
  { token: null, errorMessage: "" }
)
