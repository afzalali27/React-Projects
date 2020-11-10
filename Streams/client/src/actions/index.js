import streams from "../apis/streams";

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
  return async (dispatch) => {
    const res = await streams.post("/streams", formValues);
    // dispatching action of create stream type with new data that is responsed back from server

    dispatch({ type: "CREATE_STREAM", payload: res.data });
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
    const res = await streams.put(`/streams${id}`, updatedValues);
    dispatch({ type: "EDIT_STREAM", payload: res.data });
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
