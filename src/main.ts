
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
import TabsComp from './components/ui/TabsComp.vue'
import TableComp from './components/ui/TableComp.vue'
import ModalComp from './components/ui/ModalComp.vue'

const app = createApp(App)

app.component('button-comp', ButtonComp)
app.component('card-comp', CardComp)
app.component('text-field-comp', TextFieldComp)
app.component('title-comp', TitleComp)
app.component('tabs-comp', TabsComp)
app.component('table-comp', TableComp)
app.component('modal-comp', ModalComp)

app.use(createPinia())
app.use(router)
app.use(mdiVue, {
  icons: mdijs
})
app.mount('#app')
