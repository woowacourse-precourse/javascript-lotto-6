import Get from '../../../src/modules/Get.js';

test.each([
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 100, 0],
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 10000, 200],
  [
    [0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0],
    12313,
    15.028831316494761,
  ],
  [[0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 10000, 18.505],
  [[0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 625, 296.08],
])('lottoReturnRatio()', (resultArray, numberOfLotto, expectedValue) => {
  //when
  const lottoReturnRatio = Get.lottoReturnRatio(resultArray, numberOfLotto);

  //then
  expect(lottoReturnRatio).toBe(expectedValue);
});
