import * as types from './mutation-types';
import {ipcRenderer} from 'electron';

export const fetchSlides = ({commit}) => {
    ipcRenderer.once('getSlides', (event, {top_stories}) => {
        commit(types.FETCH_SLIDES, {top_stories});
    });
    ipcRenderer.send('fetchSlides');
};

export const fetchStories = ({commit}, date) => {
    ipcRenderer.once('getStories', (event, stories) => {
        commit(types.FETCH_STORIES, stories);
    });
    ipcRenderer.send('fetchStories', date);
};
