export default function (state = {}, action) {
  switch (action.type) {
    case "SET_ERROR_CODE":
      return {
        ...state,
        errCode: action.payload,
      };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errMessage: action.payload,
      };
    case "TOGGLE_ERROR":
      return {
        ...state,
        show: action.payload,
      };

    default:
      return state;
  }
}
