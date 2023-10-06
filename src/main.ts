
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mdiVue from 'mdi-vue/v3.js'
import * as mdijs from '@mdi/js'

import App from './App.vue'
import router from './router'

import ButtonComp from './components/ui/ButtonComp.vue'
import CardComp from './components/ui/CardComp.vue'
import TextFieldComp from './components/ui/TextFieldComp.vue'
import TitleComp from './components/ui/TitleComp.vue'

const app = createApp(App)

app.component('button-comp', ButtonComp)
app.component('card-comp', CardComp)
app.component('text-field-comp', TextFieldComp)
app.component('title-comp', TitleComp)

app.use(createPinia())
app.use(router)
app.use(mdiVue, {
  icons: mdijs
})
app.mount('#app')
