export default function (state = {}, action) {
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

    default:
      return state;
  }
}
