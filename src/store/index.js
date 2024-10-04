// src/store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定义初始状态
const state = {
  isLoggedIn: false,
  currentUser: null,
  currentSong: null,
};

// 定义突变 改变state
const mutations = {
  SET_LOGGED_IN(state, payload) {
    state.isLoggedIn = payload.isLoggedIn;
    state.currentUser = payload.user;
  },
  LOGOUT(state) {
    state.isLoggedIn = false;
    state.currentUser = null;
    state.currentSong = null;
  },
  SET_CURRENT_SONG(state,song){
    state.currentSong = song;
  }
};

// 定义动作 处理异步操作
const actions = {
  login({ commit }, user) {
    // 这里可以添加验证逻辑，例如向后端发送请求
    // 假设登录成功
    commit('SET_LOGGED_IN', { isLoggedIn: true, user });
  },
  logout({ commit }) {
    commit('LOGOUT');
  },
  setCurrentSong({commit},song){
    commit('SET_CURRENT_SONG',song)
  }
};

// 定义 getters
const getters = {
  isLoggedIn: state => state.isLoggedIn,
  currentUser: state => state.currentUser,
  currentSong: state => state.currentSong
};

// 创建并导出 store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
