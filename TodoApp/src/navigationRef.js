// import { NavigationActions } from 'react-navigation';

// let navigator;

// export const setNavigator = nav => {
//   navigator = nav;
// };

// export const navigate = (routeName, params) => {
//   navigator.dispatch(
//     NavigationActions.navigate({
//       routeName,
//       params
//     })
//   );
// };
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
