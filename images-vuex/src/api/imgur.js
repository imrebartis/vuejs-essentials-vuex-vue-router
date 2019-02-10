import qs from "qs";
import axios from "axios";

const CLIENT_ID = '9aca008c443325f';
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
    const promises = Array.from(images).map(image => {
      // create formData object
      const formData = new FormData();
      // 'image' here is a key that has to be provided according to https://apidocs.imgur.com/#c85c9dfc-7487-4de2-9ecd-66f727cf3139, while image is the value of the image file reference
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })

    // wait for all upload requests to be completed before we allow the uploadImages function to continue
    return Promise.all(promises);
  }
};
