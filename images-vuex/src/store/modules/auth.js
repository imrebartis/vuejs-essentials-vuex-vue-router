const state = {
  token: null
};

const getters = {
  // turn state.token into a boolean (!!null returns false)
  isLoggedIn: state => !!state.token
};

const mutations = {};

const actions = {};
