import HomeView from './components/HomeView';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import AddView from './components/AddView';
import UpdateView from './components/UpdateView';
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
    {
        name:'LogIn',
        path:'/login',
        component: LogIn
    },
    {
        name:'AddView',
        path:'/add',
        component: AddView
    },
    {
        name:'UpdateView',
        path:'/update/:id',
        component: UpdateView
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router