export const setUser = (payload) => {
  return {
    type: "SET_USER",
    payload: payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: "SET_LOADING",
    payload: payload,
  };
};

export const userInitState = {
  data: null,
  loading: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { loading: false, data: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
};
