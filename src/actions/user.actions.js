import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (user) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/users/${user._id}`)
      .then((value) => {
        dispatch({
          type: GET_USER,
          payload: value.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
