"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayFind = arrayFind;
exports.joinArrays = joinArrays;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function arrayFind(list, predicateFn) {
  for (var i = 0; i < list.length; i++) {
    if (predicateFn(list[i])) {
      return list[i];
    }
  }

  return void 0;
}

function joinArrays(array1) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return [].concat(_toConsumableArray(array1), rest);
}