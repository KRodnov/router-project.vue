import VueRouter from 'vue-router'
import Vue from "vue";
Vue.use(VueRouter);

import USA from "../components/USA";
import France from "../components/France";
import Italy from "../components/Italy";
import Germany from "../components/Germany";
import Spain from "../components/Spain";
import loadingSection from "../components/loadingSection";
import Menu from "../components/Menu"





const routes = [
    { path: '/', component: loadingSection},
    { path: '/USA', component: USA},
    { path: '/France', component: France },
    { path: '/Italy', component: Italy },
    { path: '/Germany', component: Germany },
    { path: '/Spain', component: Spain},
    { path: '/Menu', component: Menu}

];

const router = new VueRouter({
    routes:routes
});

export default router;