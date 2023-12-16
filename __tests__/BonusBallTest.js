import { BonusBall } from '../src/models/index.js';
import { BONUS_BALL_FORM, ERROR_MESSAGE } from '../src/constants/index.js';

describe('BonusBall 클래스 테스트', () => {
  const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];
  test('보너스 번호는 숫자여야 한다. 그렇지 않을 경우 예외가 발생한다.', () => {
    const TEST_ITEMS = [
      '하나',
      '1',
      { number: 1 },
      [1],
      true,
      null,
      undefined,
      NaN,
    ];
    TEST_ITEMS.forEach((v) => {
      expect(() => {
        new BonusBall(v, LOTTO_NUMBERS);
      }).toThrow(ERROR_MESSAGE.isNotNumber);
    });
  });

  test(`보너스 번호는 ${BONUS_BALL_FORM.range.min}~${BONUS_BALL_FORM.range.max} 사이의 숫자여야 한다. 그렇지 않을 경우 예외가 발생한다.`, () => {
    const TEST_ITEMS = [0, 46, 100];
    TEST_ITEMS.forEach((v) => {
      expect(() => {
        new BonusBall(v, LOTTO_NUMBERS);
      }).toThrow(ERROR_MESSAGE.range);
    });
  });

  test('BonusBall은 당첨 로또 번호를 받는다.그렇지 않을 경우 예외가 발생한다.', () => {
    const WRONG_LOTTO_NUMBERS = [
      [1, 2, 3, 4, 6, 57],
      ['1', 2, 3, 4, 5, 6],
      [1, 2, 3],
    ];

    WRONG_LOTTO_NUMBERS.forEach((v) => {
      expect(() => {
        new BonusBall(13, v);
      }).toThrow(ERROR_MESSAGE.header);
    });
  });

  test('보너스 번호는 당첨 로또 번호과 중복되지 않는다.그렇지 않을 경우 예외가 발생한다.', () => {
    const TEST_ITEMS = Array.from(LOTTO_NUMBERS);
    TEST_ITEMS.forEach((v) => {
      expect(() => new BonusBall(v, LOTTO_NUMBERS)).toThrow(
        ERROR_MESSAGE.duplicateBonusBall,
      );
    });
  });

  test('보너스 번호와 당첨 로또 번호가 유효하면, BonusBall의 number는 보너스 번호를 값으로 가진다.', () => {
    const TEST_ITEMS = [
      { bonus: 1, lotto: [2, 3, 4, 5, 6, 7] },
      { bonus: 20, lotto: [21, 30, 40, 6, 13, 25] },
    ];

    TEST_ITEMS.forEach((v) => {
      expect(new BonusBall(v.bonus, v.lotto).getNumber()).toEqual(v.bonus);
    });
  });
});
