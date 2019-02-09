import qs from "qs";
import axios from "axios";

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },

  uploadImages(images, token) {
    // turn images into an array
    Array.from(images).map(image => {
      // create formData object
      const formData = new formData();
      // 'image' here is a key that has to be provided according to https://apidocs.imgur.com/#c85c9dfc-7487-4de2-9ecd-66f727cf3139, while image is the value of the image file reference
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  }
};
