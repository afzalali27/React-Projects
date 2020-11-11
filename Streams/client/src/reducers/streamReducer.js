import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") }; // take new object any make object to map with keys then append to last object
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload); // we don't have to ref id, becase we already passing just id

    default:
      return state;
  }
};
