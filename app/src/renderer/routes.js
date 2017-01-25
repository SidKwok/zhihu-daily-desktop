import HomePage from 'views/HomePage';
import ListPage from 'views/ListPage';
import ArticlePage from 'views/ArticlePage';

export default [
    {
        path: '/',
        redirect: '/list',
        name: 'HOME',
        component: HomePage,
        children: [
            {
                name: 'list-page',
                path: 'list',
                component: ListPage
            },
            {
                name: 'article-page',
                path: 'article/:id',
                component: ArticlePage
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
];
