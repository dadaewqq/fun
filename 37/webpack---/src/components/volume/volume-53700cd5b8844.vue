var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"volume"},[_c('mm-icon',{staticClass:"pointer volume-icon",attrs:{"type":_vm.getVolumeIconType(),"size":30},on:{"click":_vm.handleToggleVolume}}),_c('div',{staticClass:"volume-progress-wrapper"},[_c('mm-progress',{attrs:{"percent":_vm.volumeProgress},on:{"percentChange":_vm.handleVolumeChange}})],1)],1)}
var staticRenderFns = []

export { render, staticRenderFns }