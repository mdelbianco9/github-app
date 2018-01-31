import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV != 'production';

// Imports Vue router
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

// assigns vue router to an object. its a variable that will be exported to othr parts of our application
export const router = new VueRouter({
	routes,
});

import './assets/sass/app.scss';


// Export the router variable to use it in different parts of out application
export default {
	router: router
};