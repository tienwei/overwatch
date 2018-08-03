import { API } from "aws-amplify";

export const recordLocation = payLoad => {
  const { userId, latitude, longitude } = payLoad;

  return API.post("LocationsCRUD", "/Locations", {
    body: {
      userId,
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
