import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);


import USA from "./components/USA";
import France from "./components/France";
import Italy from "./components/Italy";
import Germany from "./components/Germany";
import Spain from "./components/Spain";
import loadingSection from "./components/loadingSection";
import Menu from "./components/Menu"





const routes = [
  { path: '/', component: loadingSection},

  { path: '/USA', component: USA },
  { path: '/France', component: France },
  { path: '/Italy', component: Italy },
  { path: '/Germany', component: Germany },
  { path: '/Spain', component: Spain},
  { path: '/Menu', component: Menu}

];

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
});

Vue.config.productionTip = false;

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app');
