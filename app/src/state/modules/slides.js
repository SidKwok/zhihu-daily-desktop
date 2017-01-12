import * as types from '../mutation-types';

const state = {
    main: []
};

const mutations = {
    [types.FETCH_SLIDES](state, payload) {
        state.main = payload.stories;
    }
};

export default {
    state,
    mutations
};
