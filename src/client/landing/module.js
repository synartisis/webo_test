import Vue from 'vue/dist/vue.min'
import { PI, m3_value } from './module2'
import '../../common/common'

new Vue({
  el: '#app',
  data() {
    return {
      test: `vue testing ${PI} 123`,
      message: null,
    }
  }
})

document.querySelector('#out-module').innerHTML = `modules content: <br> module2=${PI}, <br> module3=${m3_value}, <br>module=123`