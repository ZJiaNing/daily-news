// 入口文件
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './config/rem'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
    routes: routes
});

// new Vue({
//         router,
//         render: h => h(App)
//     })
//     .$mount('#app')


// 不知道为什么不能使用上面的那种写法呢？？
new Vue({
        router,
    })
    .$mount('#app')