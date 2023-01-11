import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { Link } from '@inertiajs/inertia-vue3'

Vue.component('Link', Link)

InertiaProgress.init()
createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})

git config --global user.email "oscardasilva52@gmail.com"
git config --global user.name "Oscar Da Silva"