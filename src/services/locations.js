import { API } from "aws-amplify";

export const recordLocation = payLoad => {
  const { userName, latitude, longitude } = payLoad;

  return API.post("LocationsCRUD", "/Locations", {
    body: {
      userName,
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
