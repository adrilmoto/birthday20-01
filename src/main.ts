import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createHead } from 'unhead'

// Create a global head instance
createHead()

createApp(App).mount('#app')
