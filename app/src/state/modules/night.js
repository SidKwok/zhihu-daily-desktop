import * as types from '../mutation-types';

const state = {
    main: false
};

const mutations = {
    [types.TOGGLE_NIGHT](state) {
        state.main = !state.main;
    }
};

export default {
    state,
    mutations
};
