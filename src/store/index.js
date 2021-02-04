import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import jobsReducer from "../reducer/jobs";
import favReducer from "../reducer/favourite";
import errReducer from "../reducer/errors";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  favouriteJobList: [],
  jobSearch: {
    jobList: [],
    selectedJob: {},
    loading: false,
  },
  error: {
    errCode: 0,
    errMessage: "",
    show: false,
  },
};

const bigDaddyReducer = combineReducers({
  favouriteJobList: favReducer,
  jobSearch: jobsReducer,
  error: errReducer,
});

export default function configureStore() {
  return createStore(
    bigDaddyReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
