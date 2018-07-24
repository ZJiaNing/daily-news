// 路由
import App from '../App';
import Home from '../page/home';
import Profile from '../page/profile';

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [{
            path: '',
            redirect: '/home'
        },
        {
            path: 'home',
            component: Home
        },
        {
            path: 'profile',
            component: Profile
        }
    ]
}]