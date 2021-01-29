/* Store module
   Configures the application state
*/
import { createStore } from 'redux';
import authReducer from './auth/auth.reducer';
const store = createStore(authReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
