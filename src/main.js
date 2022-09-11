import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import store from "./store";
import Toast from 'vue3-toast-single'
import 'vue3-toast-single/dist/toast.css'

//import './assets/main.css'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toast, { verticalPosition: "top right", duration: 2500 })

axios.defaults.withCredentials = true;
app.config.globalProperties.axios = axios;

app.mount('#app');
