import "vue-tsx-support/enable-check";
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
