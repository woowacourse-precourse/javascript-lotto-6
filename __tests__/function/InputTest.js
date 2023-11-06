import chageStringtoArray from '../../src/util/chageStringtoArray.js';

describe('쉼표를 구분으로 하여 입력된 값이 배열로 변환되는지 확인하기', () => {
  test('쉼표를 기준으로 해서 NaN과 숫자를 정확히 구분하는지 확인', () => {
    // given
    const cases = [',,', '1,2,3', 'as, fg, h5', 'ㅁ,3 ,4', '1, 3, 4,5'];
    const expection = [
      [0, 0, 0],
      [1, 2, 3],
      [NaN, NaN, NaN],
      [NaN, 3, 4],
      [1, 3, 4, 5],
    ];

    cases.forEach((item, index) => {
      // when
      const result = chageStringtoArray(item);
      // then
      expect(result).toEqual(expection[index]);
    });
  });
});
