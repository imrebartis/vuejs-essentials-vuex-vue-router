const state = {
  token: null
};

const getters = {
  // turn state.token into a boolean (!!null returns false)
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
  }
};
