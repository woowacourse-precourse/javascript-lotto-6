import Get from '../../../src/modules/Get.js';

test.each([
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 100, '0,0'],
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 10000, '20000.0'],
  [[0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 12313, '249.0'],
  [[0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 10000, '306.6'],
  [[0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 625, '4904.8'],
])('lottoReturnRatioString()', (resultArray, numberOfLotto, expectedValue) => {
  //when
  const lottoReturnRatio = Get.lottoReturnRatioString(
    resultArray,
    numberOfLotto
  );

  //then
  expect(lottoReturnRatio).toBe(expectedValue);
});
