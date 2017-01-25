'use strict';

import electron from 'electron';
import initApis from './apis';

initApis(electron);

let mainWindow;
const { app, BrowserWindow } = electron;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
    mainWindow = new BrowserWindow({
        height: 700,
        maxHeight: 720,
        minHeight: 400,
        width: 414,
        maxWidth: 500,
        minWidth: 400,
        titleBarStyle: 'hidden-inset'
    });

    mainWindow.loadURL(winURL);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    console.log('mainWindow opened');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
