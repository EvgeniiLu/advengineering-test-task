
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mdiVue from 'mdi-vue/v3.js'
import * as mdijs from '@mdi/js'

import App from './App.vue'
import router from './router'

import ButtonComponent from './components/ui/ButtonComponent.vue'
import CardComponent from './components/ui/CardComponent.vue'
import TextFieldComponent from './components/ui/TextFieldComponent.vue'
import TitleComponent from './components/ui/TitleComponent.vue'
import TabsComponent from './components/ui/TabsComponent.vue'
import TableComponent from './components/ui/TableComponent.vue'
import ModalComponent from './components/ui/ModalComponent.vue'
import NotificationComponent from './components/ui/NotificationComponent.vue'

const app = createApp(App)

app.component('button-component', ButtonComponent)
app.component('card-component', CardComponent)
app.component('text-field-component', TextFieldComponent)
app.component('title-component', TitleComponent)
app.component('tabs-component', TabsComponent)
app.component('table-component', TableComponent)
app.component('modal-component', ModalComponent)
app.component('notification-component', NotificationComponent)

app.use(createPinia())
app.use(router)
app.use(mdiVue, {
  icons: mdijs
})
app.mount('#app')
