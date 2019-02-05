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

  async uploadImages({ commit }, images) {
    console.log(images);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
