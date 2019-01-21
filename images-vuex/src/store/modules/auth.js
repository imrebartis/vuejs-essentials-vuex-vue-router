import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: window.localStorage.getItem('imgur_token')
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
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash ) {
    const query = qs.parse(hash.replace('#', ''));

    commit('setToken', query.access_token);
    // here btw brackets: 'imgur_token' is a key name, while query.access_token is the piece of info we'll store in localStorage
    window.localStorage.setItem('imgur_token', query.access_token);
  },
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
}
