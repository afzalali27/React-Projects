const INITTIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

// at start pass default value
export default (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
