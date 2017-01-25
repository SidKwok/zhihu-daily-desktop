import * as types from '../mutation-types';

const state = {
    main: []
};

const mutations = {
    [types.FETCH_SLIDES](state, payload) {
        state.main = payload.stories;
    },
    [types.UPDATE_SLIDES](state, {slides}) {
        state.main = slides;
    }
};

export default {
    state,
    mutations
};
