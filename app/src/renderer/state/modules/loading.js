import * as types from '../mutation-types';

const state = {
    main: false
};

const mutations = {
    [types.START_LOADING](state) {
        state.main = true;
    },
    [types.DONE_LOADING](state) {
        state.main = false;
    }
};

export default {
    state,
    mutations
};
