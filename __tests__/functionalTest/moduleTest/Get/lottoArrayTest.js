import Get from '../../../../src/functinoal/modules/Get';

test.each([[1], [2], [6], [10]])('lottoArray', input => {
  //when
  const lottoArray = Get.randomLottoArray(input);

  //then
  expect(lottoArray).toHaveLength(input);
  lottoArray.map(lotto => {
    expect(lotto.getNumbers()).toHaveLength(6);
  });
});
