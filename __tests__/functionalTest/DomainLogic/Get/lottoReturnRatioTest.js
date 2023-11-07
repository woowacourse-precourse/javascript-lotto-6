import Get from '../../../../src/functinoal/modules/Get';

test.each([
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 100, 0],
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 10000, 20000],
  [
    [0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0],
    12313,
    248.96450905546982,
  ],
  [[0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 10000, 306.55],
  [[0, 400, 300, 200, 100, 15, 20, 11, 10, 0, 0, 1, 0], 625, 4904.8],
])('lottoReturnRatio()', (resultArray, numberOfLotto, expectedValue) => {
  //when
  const lottoReturnRatio = Get.lottoReturnRatio(resultArray, numberOfLotto);

  //then
  expect(lottoReturnRatio).toBe(expectedValue);
});
