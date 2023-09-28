var render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.contract)?_c('div',[_c('div',[_c('Details',{attrs:{"watch":_vm.watch,"contract":_vm.contract},on:{"update":_vm.updateWatch}})],1),_c('div',[_c('PositionList',{staticClass:"mt-4",attrs:{"contract":_vm.contract}})],1),(_vm.getLevel().canSnipe())?_c('div',{staticStyle:{"margin-top":"30px"}},[_c('HistoryList',{attrs:{"contract":_vm.contract}})],1):_vm._e()]):_c('div',{},[_vm._m(0)])
}
var staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body p-0 p-4",staticStyle:{"font-weight":"900"}},[_vm._v(" Loading contract details "),_c('img',{staticClass:"loading-icon",attrs:{"src":"img/spinner.svg"}})])])
}]

export { render, staticRenderFns }