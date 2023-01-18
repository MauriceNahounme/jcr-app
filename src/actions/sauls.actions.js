import axios from "axios";

export const GET_SAULS = "GET_SAULS";

export const getSauls = (user) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/sauls/user_sauls`, {
        params: { userId: user._id },
      })
      .then((value) => {
        dispatch({
          type: GET_SAULS,
          payload: value.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
