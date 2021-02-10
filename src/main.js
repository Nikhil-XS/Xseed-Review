import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import HomePage from './components/home/HomePage.vue';
import ListReview from './components/review/ListReview.vue';

import App from './App.vue'


const routes = [
    { path: '/', redirect: '/home'},
    {
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/review',
        name: 'review',
        component: ListReview
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes 

})

const app = createApp(App)
app.use(router)
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
