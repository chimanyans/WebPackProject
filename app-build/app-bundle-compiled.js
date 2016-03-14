var myApp =
/******/function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	var greeting = __webpack_require__(!function webpackMissingModule() {
		var e = new Error("Cannot find module \"./greeting.js\"");e.code = 'MODULE_NOT_FOUND';throw e;
	}());
	var log = __webpack_require__(2);

	(function () {
		var welcomeBtn = document.getElementById("welcomeBtn");
		var welcomeMsg = document.getElementById("welcomeMsg");

		log();

		welcomeBtn.addEventListener('click', function () {
			greeting(welcomeMsg);
		});
	})();

	/***/
},,
/* 1 */
/* 2 */
/***/function (module, exports, __webpack_require__) {

	/**
  * Created by chima on 3/13/2016.
  */

	module.exports = function () {

		console.log("development");
		console.log("en");
		if (true) console.log("hello");
	};

	/***/
}
/******/]);
//# sourceMappingURL=app-bundle.js.map

//# sourceMappingURL=app-bundle-compiled.js.map