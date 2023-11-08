import BonusNumber from '../../src/model/BonusNumber.js';

import ValidationError from '../../src/error/ValidationError.js';
import { BONUS_NUMBER_ERROR } from '../../src/constants/error.js';

describe('BonusNumber class 기능 테스트', () => {
  test('보너스 번호 와 로또 번호 중복 확인', () => {
    // given
    const error = new ValidationError(BONUS_NUMBER_ERROR.DUPLICATE);
    const bonus = '1';
    const lotto = [1, 2, 3, 4, 5, 6];

    // when then
    expect(() => {
      new BonusNumber(bonus, lotto);
    }).toThrow(error.message);
  });

  // given
  test.each([
    [[[1, 2, 3, 4, 5, 6], '0']],
    [[[11, 34, 23, 31, 37, 9], '46']],
    [[[11, 34, 23, 31, 37, 9], '#']],
    [[[11, 34, 23, 31, 37, 9], '뮤as']],
  ])('보너스번호가 1~45 사이인지 확인', ([lotto, bonus]) => {
    const error = new ValidationError(BONUS_NUMBER_ERROR.NUMBER);

    // when then
    expect(() => {
      new BonusNumber(bonus, lotto);
    }).toThrow(error.message);
  });

  test('정상 입력이 되었을 때, 보너스 번호 생성 테스트', () => {
    // given
    const bonus = '10';
    const lotto = [1, 2, 3, 4, 5, 6];
    const result = 10;

    // when
    const bonusNumber = new BonusNumber(bonus, lotto);

    // then
    expect(bonusNumber.getBonusNumber()).toBe(result);
  });
});
