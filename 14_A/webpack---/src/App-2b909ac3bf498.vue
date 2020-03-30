function injectStyle (ssrContext) {
  require("!!../node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!vue-style-loader!css-loader?{\"sourceMap\":true}!../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-9672a1f2\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector?type=styles&index=0!./App.vue")
}
var normalizeComponent = require("!../node_modules/vue-loader/lib/component-normalizer")
/* script */
export * from "!!babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue"
import __vue_script__ from "!!babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue"
/* template */
import __vue_template__ from "!!../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-9672a1f2\",\"hasScoped\":false,\"transformToRequire\":{\"video\":[\"src\",\"poster\"],\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"buble\":{\"transforms\":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue"
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

export default Component.exports



//////////////////
// WEBPACK FOOTER
// ./src/App.vue
// module id = null
// module chunks = 