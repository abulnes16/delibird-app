/* Auth reducer module
   Reducer for dispatching actions to the store
*/

interface AuthState {

  loading: boolean;
  userToken: string;
}

const initialState: AuthState = {

  loading: true,
  userToken: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        userToken: action.payload,

      };
    case 'SIGN_OUT':
      return {
        ...state,
        userToken: '',
      };
    case 'REFRESH_TOKEN':
      return {
        ...state,
        userToken: action.payload,
      };
    default:
      return state;
  }
}