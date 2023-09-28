var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('transition',{attrs:{"name":"fade","appear":""}},[(_vm.active)?_c('div',{staticClass:"mymodal-overlay",on:{"click":_vm.close}}):_vm._e()]),_c('transition',{attrs:{"name":"pop","appear":""}},[(_vm.active)?_c('div',{staticClass:"mymodal",attrs:{"role":"dialog"}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',{staticClass:"close-btn",on:{"click":_vm.close}},[_c('font-awesome-icon',{attrs:{"color":"black","icon":"times"}})],1),_vm._t("default")],2)]):_vm._e()])],1)
}
var staticRenderFns = []

export { render, staticRenderFns }