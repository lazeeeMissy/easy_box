import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from '../src/router/index';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './assets/styles.scss'

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router).mount('#app');
