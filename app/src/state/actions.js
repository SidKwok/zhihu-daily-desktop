import * as types from './mutation-types';
import {ipcRenderer} from 'electron';

export const fetchSlides = ({commit}) => {
    ipcRenderer.once('getSlides', (event, stories) => {
        commit(types.FETCH_SLIDES, {stories});
    });
    ipcRenderer.send('fetchSlides');
};

export const fetchStories = ({commit}, date) => {
    ipcRenderer.once('getStories', (event, stories) => {
        commit(types.FETCH_STORIES, {date, stories});
    });
    ipcRenderer.send('fetchStories', date);
};
