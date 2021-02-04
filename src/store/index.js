import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import jobsReducer from "../reducer/jobs";
import favReducer from "../reducer/favourite";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  favouriteJobList: [],
  jobSearch: {
    jobList: [],
    selectedJob: {},
  },
};

const bigDaddyReducer = combineReducers({
  favouriteJobList: favReducer,
  jobSearch: jobsReducer,
});

export default function configureStore() {
  return createStore(
    bigDaddyReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
