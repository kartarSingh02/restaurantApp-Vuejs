import HomeView from './components/HomeView';
import SignUp from './components/SignUp';
import {createRouter,createWebHistory} from 'vue-router';

const routes = [
    {
        name:'HomeView',
        path:'/',
        component:HomeView
    },
    {
        name:'SignUp',
        path:'/signUp',
        component: SignUp
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router