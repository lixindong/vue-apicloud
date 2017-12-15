import App from './app.vue';
import Vue from 'vue';
import vTap from 'v-tap';
import  'public/api'
import 'assets/css/aui.css';

Vue.use(vTap); //添加vue tap事件
console.log(window.$api)
window.apiready = function() {
    new Vue({
        el: '#app',
        render: h => h(App)
    })
    let header = document.getElementById('header');
    window.$api.fixStatusBar(header);
}
