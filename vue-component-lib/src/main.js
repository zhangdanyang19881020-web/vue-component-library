import {
	createApp
} from 'vue'
import './styles/style.css'
import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 Element Plus 的样式

createApp(App)
	.use(ElementPlus)
	.mount('#app')