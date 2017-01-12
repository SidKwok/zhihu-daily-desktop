import * as types from '../mutation-types';

const state = {
    main: []
};

const mutations = {
    [types.FETCH_STORIES](state, payload) {
        state.main.push(payload);
    }
};

export default {
    state,
    mutations
};
