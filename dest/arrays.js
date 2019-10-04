"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayFind = arrayFind;
function arrayFind(list, predicateFn) {
  for (var i = 0; i < list.length; i++) {
    if (predicateFn(list[i])) {
      return list[i];
    }
  }
  return void 0;
}