import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  form: formReducer
})
const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware);

export default store;
