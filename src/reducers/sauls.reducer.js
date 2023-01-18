import { GET_SAULS } from "../actions/sauls.actions";

const initialState = [];

const saulsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAULS:
      return action.payload;

    default:
      return state;
  }
};

export default saulsReducer;
