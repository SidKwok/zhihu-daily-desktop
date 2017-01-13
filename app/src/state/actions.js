import * as types from './mutation-types';
import {ipcRenderer} from 'electron';

export const startLoading = ({commit}) => {
    commit(types.START_LOADING);
};

export const doneLoading = ({commit}) => {
    commit(types.DONE_LOADING);
};

export const fetchSlides = ({commit}) => {
    return new Promise(resolve => {
        ipcRenderer.once('getSlides', (event, stories) => {
            commit(types.FETCH_SLIDES, {stories});
            resolve();
        });
        ipcRenderer.send('fetchSlides');
    });
};

export const fetchStories = ({commit}, date) => {
    return new Promise(resolve => {
        ipcRenderer.once('getStories', (event, stories) => {
            commit(types.FETCH_STORIES, {date, stories});
            resolve();
        });
        ipcRenderer.send('fetchStories', date);
    });
};

export const updateNewest = ({commit}) => {
    return new Promise(resolve => {
        ipcRenderer.once('getNewest', (event, {slides, stories}) => {
            commit(types.UPDATE_SLIDES, {slides});
            commit(types.UPDATE_TODAY, {stories});
            resolve();
        });
        ipcRenderer.send('updateNewest');
    });
};
