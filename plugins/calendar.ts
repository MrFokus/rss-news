import VCalendar from 'v-calendar';
import VDatePicker from 'v-calendar';
import 'v-calendar/style.css';
export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.use(VCalendar,{})
    nuxtApp.vueApp.use(VDatePicker,{})
})