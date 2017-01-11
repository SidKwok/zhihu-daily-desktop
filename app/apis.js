const axios = require('axios');
axios.defaults.baseURL = 'http://news-at.zhihu.com/api';

module.exports = function ({ipcMain}) {
    ipcMain.on('fetchSlides', event => {
        axios.get('/4/news/latest')
            .then(({data}) => {
                event.sender.send('getSlides', data);
            });
    });

    ipcMain.on('fetchStories', (event, date) => {
        axios.get(`/4/news/before/${date}`)
            .then(({data}) => {
                console.log(data);
                event.sender.send('getStories', data);
            });
    });
};
