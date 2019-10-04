const { arrayFind } = require('./arrays');

test("It finds an element in an array", () => {
  const testArray = [1,2,36];
  const needle = 36;
  const found = arrayFind(testArray, (item) => item === needle );
  expect(found).toBe(needle);
});

test("It returns undefined when item is not in array", () => {
  const testArray = [77, 55, 33];
  const found = arrayFind(testArray, item => item === 99999);
  expect(found).toBe(void 0);
});