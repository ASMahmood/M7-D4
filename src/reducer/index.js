import initialState from "../store";

export default function (state = initialState, action) {
  switch (action.type) {
    case "SELECT_SINGLE_JOB":
      return {
        ...state,
        selectedJob: action.payload,
      };
    case "POPULATE_JOB_LIST":
      return {
        ...state,
        jobList: action.payload,
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favouriteJobList: state.favouriteJobList.concat(action.payload),
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favouriteJobList: state.favouriteJobList.filter(
          (job) => job.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
