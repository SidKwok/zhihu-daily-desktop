import * as types from '../mutation-types';

const state = {
    main: []
};

const mutations = {
    [types.FETCH_STORIES](state, payload) {
        state.main.push(payload);
    },
    [types.UPDATE_TODAY](state, {stories}) {
        state.main[0] = stories;
    }
};

export default {
    state,
    mutations
};
