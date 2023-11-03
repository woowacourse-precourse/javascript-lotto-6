import Get from '../../src/modules/Get.js';

describe('Get 테스트', () => {
  test.each([[1], [2], [6], [10]])('lottoArray', input => {
    //when
    const lottoArray = Get.randomLottoArray(input);

    //then
    expect(lottoArray).toHaveLength(input);
    lottoArray.map(lotto => {
      expect(lotto.getNumbers()).toHaveLength(6);
    });
  });
});
