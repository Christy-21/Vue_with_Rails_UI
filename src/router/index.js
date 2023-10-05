import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import TemplateListing from '../components/TemplateListing.vue';
import FormsProcessed from '../components/FormsProcessed.vue';
import New from '../components/New.vue';
import TemplatePage from '../components/TemplatePage.vue'
const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  { 
    path: '/templates/list', 
    component: TemplateListing 
  },
  { 
    path: '/forms/processed', 
    component: FormsProcessed 
  },
  { 
    path: '/templates/new', 
    component: New 
  },
  { 
    path: '/templates/:templateId', // Dynamic parameter for templateId
    component: TemplatePage ,
    name: "TemplatePage",
    props: true,
    // Use the TemplatePage component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
