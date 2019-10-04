export function arrayFind(list, predicateFn) {
  for (let i = 0; i < list.length; i++) {
    if (predicateFn(list[i])) {
      return list[i];
    }
  }
  return void 0;
}
