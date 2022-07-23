/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nwindow.addEventListener('load', () => {\n    function getUser() {\n        return __awaiter(this, void 0, void 0, function* () {\n            for (let i = 1; i <= 151; i++) {\n                let url = `https://pokeapi.co/api/v2/pokemon/${i}`;\n                let result = yield fetch(url);\n                let pokeData = yield result.json();\n                let typeName1 = pokeData.types[0].type.name;\n                let typeName2;\n                let typeHTML;\n                let typeClass;\n                if (pokeData.types.length == 1) {\n                    typeHTML =\n                        `<div class=\"box-types\">\n      <div class=\"icon ${typeName1}\">\n        <img src=\"../assets/icons/${typeName1}.svg\" />\n      </div>\n      <p class=\"type-text\">${typeName1}</p>\n    </div>`;\n                    typeClass = 'oneType';\n                }\n                else {\n                    typeClass = 'twoType';\n                    typeName2 = pokeData.types[1].type.name;\n                    typeHTML =\n                        `<div class=\"box-types\">\n        <div class=\"icon ${typeName1}\">\n          <img src=\"../assets/icons/${typeName1}.svg\" />\n        </div>\n        <p class=\"type-text\">${typeName1}</p>\n        <div class=\"icon ${typeName2}\">\n          <img src=\"../assets/icons/${typeName2}.svg\" />\n        </div>\n        \n        <p class=\"type-text\">${typeName2}</p>\n      \n    </div>`;\n                }\n                let container = document.querySelector('.kanto .container-grid');\n                container.innerHTML = container.innerHTML +\n                    `<div class=\"box-card type-${typeName1}\">\n      <h2 class=\"name\">${pokeData.name} | ${pokeData.id}</h2>\n      <div class=\"box-img\">\n        <img\n          class=\"poke-img\"\n          src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png\"\n          alt=\"\"\n        />\n      </div>\n\n      <div class=\"box-footer ${typeClass}\">\n        ${typeHTML}\n        <p class=\"pesoAltura\">\n          Peso: ${pokeData.weight / 10}kg <br />\n          Altura: ${pokeData.height * 10 >= 100 ? pokeData.height / 10 + 'm' : pokeData.height * 10 + 'cm'}\n        </p>\n      </div>\n    </div>`;\n            }\n        });\n    }\n    getUser();\n});\n\n\n//# sourceURL=webpack://pokedux/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;