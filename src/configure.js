import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

let config = {
    url:"http://localhost:8080"
}
  

export default function configure () {
  Vue.config.productionTip = false
  
  Vue.use(ElementUI)
  
  
  Vue.prototype.config = config
}