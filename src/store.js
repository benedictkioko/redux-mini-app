import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import movielistReducer from "./reducers/movielistReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

//Combining our reducers and change property names
const allReducers = combineReducers({
  movies: movielistReducer,
  users: userReducer,
});

// initial state
const initialState = {
  users: [],
  movies: { name: "CREED II" },
};

//Create out store and set our reducers, state, and middleware.
const store = createStore(
  allReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
