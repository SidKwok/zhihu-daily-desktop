import HomePage from 'views/HomePage';
import ListPage from 'views/ListPage';

export default [
    {
        path: '/',
        redirect: '/list',
        name: 'HOME',
        component: HomePage,
        children: [
            {
                name: 'LIST',
                path: 'list',
                component: ListPage
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
];
