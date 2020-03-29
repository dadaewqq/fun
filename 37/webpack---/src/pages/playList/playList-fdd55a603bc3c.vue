var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"playList"},[_c('music-list',{attrs:{"list":_vm.playlist,"list-type":1},on:{"select":_vm.selectItem,"del":_vm.deleteItem}},[_c('div',{staticClass:"list-btn",attrs:{"slot":"listBtn"},slot:"listBtn"},[_c('span',{on:{"click":function($event){return _vm.$refs.dialog.show()}}},[_vm._v("清空列表")])])]),_c('mm-dialog',{ref:"dialog",attrs:{"body-text":"是否清空正在播放列表","confirm-btn-text":"清空"},on:{"confirm":_vm.clearList}})],1)}
var staticRenderFns = []

export { render, staticRenderFns }