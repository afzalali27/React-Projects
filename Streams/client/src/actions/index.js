import streams from "../apis/streams";
import history from "../history";
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;

    const res = await streams.post("/streams", { ...formValues, userId }); // also pass the id for user who created stream
    // dispatching action of create stream type with new data that is responsed back from server

    dispatch({ type: "CREATE_STREAM", payload: res.data });
    // after creating stream user should be redirect to stream list page
    // uncomment the below line to use navigation when you have resolved history file error
     history.push("/");
  };
};

export const fetchStreams = () => {
  // return thunk function
  return async (dispatch) => {
    const res = await streams.get("/streams");
    dispatch({ type: "FETCH_STREAMS", payload: res.data });
  };
};

export const fetchStream = (id) => {
  // return thunk function
  return async (dispatch) => {
    const res = await streams.get(`/streams${id}`);
    dispatch({ type: "FETCH_STREAM", payload: res.data });
  };
};

export const editStream = (id, updatedValues) => {
  // return thunk function
  return async (dispatch) => {
    // put for updating
    // using patch it will only chnage required data, not other attr like user id
    const res = await streams.patch(`/streams${id}`, updatedValues);
    dispatch({ type: "EDIT_STREAM", payload: res.data });

    // also after removing error you can navigate back to
     history.push("/");
  };
};

export const deleteStream = (id) => {
  // return thunk function
  return async (dispatch) => {
    // we don't need response after deleting data
    await streams.get(`/streams${id}`);
    dispatch({ type: "DELETE_STREAM", payload: id });
  };
};
