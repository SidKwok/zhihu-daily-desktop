import * as types from '../mutation-types';

const state = {
    main: []
};

const mutations = {
    [types.FETCH_SLIDES](state, payload) {
        state.main = payload.top_stories;
    }
};

export default {
    state,
    mutations
};
