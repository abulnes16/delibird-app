/* Store module
   Configures the application state
*/
import {createStore} from 'redux';

function mockReducer() {}
const store = createStore(mockReducer);

export default store;
