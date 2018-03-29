// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Field, Button, Swipe, SwipeItem} from 'mint-ui'
import 'reset-style';

Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app', router, components: {
    App
  }, template: '<App/>'})
