import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import productsReducer from './reducers/products'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  prouducts: productsReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const storeConfig = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default storeConfig;