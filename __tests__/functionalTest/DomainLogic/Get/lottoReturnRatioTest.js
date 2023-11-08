import Get from '../../../../src/functinoal/modules/Get';

test.each([
  [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0],
  [[9999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 20000],
  [[11256, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 248.96450905546982],
  [[8943, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 306.55],
  [[0, 0, 268, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 4904.8],
])('lottoReturnRatio()', (resultArray, expectedValue) => {
  //when
  const lottoReturnRatio = Get.lottoReturnRatio(resultArray);

  //then
  expect(lottoReturnRatio).toBe(expectedValue);
});
