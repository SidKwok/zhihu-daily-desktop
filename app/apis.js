const axios = require('axios');
const http = require('http');
axios.defaults.baseURL = 'http://news-at.zhihu.com/api';

module.exports = function ({ipcMain}) {
    ipcMain.on('fetchSlides', event => {
        axios.get('/4/news/latest')
            .then(({data}) => {
                let stories = data.top_stories
                let imgPromises = stories.map((story, index)=> {
                    let imgUrl = story.image;
                    return new Promise(resolve => {
                        http.get(imgUrl, res => {
                            let imgData = '';
                            res.setEncoding('base64')
                            .on('data', chunk => {
                                imgData += chunk;
                            })
                            .on('end', () => {
                                story.image = 'data:image/jpg;base64,' + imgData;
                                resolve(story);
                            });
                        });
                    });
                });
                return Promise.all(imgPromises);
            })
            .then(stories => {
                event.sender.send('getSlides', stories);
            });
    });

    ipcMain.on('fetchStories', (event, date) => {
        axios.get(`/4/news/before/${date}`)
            .then(({data}) => {
                let stories = data.stories
                let imgPromises = stories.map((story, index)=> {
                    let imgUrl = story.images[0];
                    return new Promise(resolve => {
                        http.get(imgUrl, res => {
                            let imgData = '';
                            res.setEncoding('base64')
                            .on('data', chunk => {
                                imgData += chunk;
                            })
                            .on('end', () => {
                                story.images = 'data:image/jpg;base64,' + imgData;
                                resolve(story);
                            });
                        });
                    });
                });
                return Promise.all(imgPromises);
            })
            .then(stories => {
                event.sender.send('getStories', stories);
            });
    });

    ipcMain.on('cache', (event) => {
        const urls = [ 'http://pic3.zhimg.com/a2b5093857178de3c7d24bd898455b3a.jpg',
                    'http://pic2.zhimg.com/c627316d9cdcafcfd941733571840681.jpg',
                    'http://pic2.zhimg.com/8d672656c5dc06e0ad2efde2bc4bad31.jpg',
                    'http://pic2.zhimg.com/0cd5e23e4c556a3a7c25f401bacdf865.jpg',
                    'http://pic3.zhimg.com/558e51fde7055950ec20300471ad2cca.jpg' ];

        const urlPromises = urls.map(url => {
            return new Promise(resolve => {
                http.get(url, res => {
                    let imgData = '';
                    res.setEncoding('base64')
                    .on('data', chunk => {
                        imgData += chunk;
                    })
                    .on('end', () => {
                        resolve(imgData);
                    });
                });
            });
        });

        // console.log(urlPromises);

        Promise.all(urlPromises)
            .then(val => {
                // console.log(val.length);
            });
    });
};
