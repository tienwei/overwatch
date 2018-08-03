import { API } from "aws-amplify";

export const recordLocation = payLoad => {
  const { userId, itemId, latitude, longitude } = payLoad;
  dispatch({
    type: actionTypes.CREATE_POST_REQUEST
  });

  return API.post("/Locations", {
    body: {
      userId,
      itemId,
      latitude,
      longitude
    }
  })
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
};
