import { render, staticRenderFns } from "./App.vue?vue&type=template&id=3ea74058&"
import script from "./App.vue?vue&type=script&lang=js&"
export * from "./App.vue?vue&type=script&lang=js&"
import style0 from "./App.vue?vue&type=style&index=0&lang=css&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("D:\\前端\\项目源码\\Vue-webpack-demos\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3ea74058')) {
      api.createRecord('3ea74058', component.options)
    } else {
      api.reload('3ea74058', component.options)
    }
    module.hot.accept("./App.vue?vue&type=template&id=3ea74058&", function () {
      api.rerender('3ea74058', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/js/App.vue"
export default component.exports