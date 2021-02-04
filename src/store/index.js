import { createStore } from "redux";
import bigDaddyReducer from "../reducer";

const initialState = {
  selectedJob: {},
  favouriteJobList: [],
  jobList: [],
};

export default function configureStore() {
  return createStore(
    bigDaddyReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
