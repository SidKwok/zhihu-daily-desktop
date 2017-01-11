import * as types from '../mutation-types';

const state = {
    main: []
};

const mutations = {
    [types.FETCH_STORIES](state, stories) {
        state.main.push(stories);
    }
};

export default {
    state,
    mutations
};
