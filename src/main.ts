import { createApp } from 'vue'
import './style.css'
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';



const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue, { ripple: true });
app.use(router)
app.use(pinia)

app.component('p-button', Button);
app.component('p-input', InputText);
app.component('p-select-btn', SelectButton);

app.mount('#app')
