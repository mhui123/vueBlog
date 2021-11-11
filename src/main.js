import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import listPage from './router.js';
createApp(App).use(listPage).mount('#app')
