import Lotto from '../../src/model/Lotto.js';

import ValidationError from '../../src/error/ValidationError.js';
import { SELECT_NUMBER_ERROR } from '../../src/constants/error.js';

describe('Lotto class 기능 테스트', () => {
  // given
  test.each(['1, 2, 3, 4', '1, 2, 3, 4, 5, 6, 7'])('입력된 로또 번호의 길이가 6미만, 6이상일시 테스트', (input) => {
    const error = new ValidationError(SELECT_NUMBER_ERROR.COUNT);

    // when then
    expect(() => {
      new Lotto(input);
    }).toThrow(error.message);
  });

  test.each(['1, 2, 3, 4,5,0', '1, 2, 3, 4, 5, 46'])('입력된 로또 번호가 1~45 사이인지 확인', (input) => {
    const error = new ValidationError(SELECT_NUMBER_ERROR.NUMBER);

    // when then
    expect(() => {
      new Lotto(input);
    }).toThrow(error.message);
  });

  // given
  test.each(['1,2,3,4,5,5', '45,45,33,23,12,12'])('입력된 로또 번호 중복 여부 확인하기', (input) => {
    const error = new ValidationError(SELECT_NUMBER_ERROR.DUPLICATE);

    // when then
    expect(() => {
      new Lotto(input);
    }).toThrow(error.message);
  });

  test('정상 입력된 값들이 숫자 배열로 반환되는지 확인', () => {
    // given
    const input = '1,2,3,4,5,6';
    const result = [1, 2, 3, 4, 5, 6];

    // when
    const lotto = new Lotto(input);

    // then
    expect(lotto.getLotto()).toEqual(result);
  });
});
