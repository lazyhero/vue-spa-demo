webpackJsonp([1],{

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84)
	module.exports = __webpack_require__(86)
	module.exports.template = __webpack_require__(87)


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gift.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gift.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports
	
	
	// module
	exports.push([module.id, ".body {\n        background: #fff;\n    }", ""]);
	
	// exports


/***/ },

/***/ 86:
/***/ function(module, exports) {



/***/ },

/***/ 87:
/***/ function(module, exports) {

	module.exports = "<div>gift</div>";

/***/ }

});
//# sourceMappingURL=1.1.js.map