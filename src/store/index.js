import {createStore} from 'redux';
import {persistStore} from 'redux-persist';

import persistedReducer from './persist';

import reducers from './ducks';

const store = createStore(persistedReducer(reducers));
const persistor = persistStore(store);

export {store, persistor};