import api from '../../api/imgur';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

const actions = {
  // rootState gives us the ability to reach into other modules & access state
  async fetchImages({ rootState, commit }) {
    //   this is the same as const token = rootState.auth.token
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },

  async uploadImages({ rootState }, images) {
    // get the access token
    const { token } = rootState.auth;
    // call api module to do the upload
    await api.upload(images, token);

    // redirect user to ImageList component
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
