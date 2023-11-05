import BonusBall from '../src/BonusBall';
import { BONUS_BALL_FORM, ERROR_MESSAGE } from '../src/constant';
import { getErrorMessage } from '../src/utils';

describe('BonusBall 클래스 테스트', () => {
  const correctLotto = [1, 2, 3, 4, 5, 6];

  test('보너스 번호는 숫자여야 한다. 그렇지 않을 경우 예외가 발생한다.', () => {
    const wrongItems = [
      '하나',
      '1',
      { number: 1 },
      [1],
      true,
      null,
      undefined,
      NaN,
    ];
    wrongItems.forEach((v) => {
      expect(() => {
        new BonusBall(v, correctLotto);
      }).toThrow(getErrorMessage(ERROR_MESSAGE.isNotNumber));
    });
  });

  test(`보너스 번호는 ${BONUS_BALL_FORM.range.min}~${BONUS_BALL_FORM.range.max} 사이의 숫자여야 한다. 그렇지 않을 경우 예외가 발생한다.`, () => {
    const wrongItems = [0, 46, 100];
    wrongItems.forEach((v) => {
      expect(() => {
        new BonusBall(v, correctLotto);
      }).toThrow(getErrorMessage(ERROR_MESSAGE.range));
    });
  });

  test('BonusBall은 당첨 로또 번호를 받는다.그렇지 않을 경우 예외가 발생한다.', () => {
    const wrongLottos = [
      [1, 2, 3, 4, 6, 57],
      ['1', 2, 3, 4, 5, 6],
      [1, 2, 3],
    ];

    wrongLottos.forEach((v) => {
      expect(() => {
        new BonusBall(13, v);
      }).toThrow(ERROR_MESSAGE.header);
    });
  });

  test('보너스 번호는 당첨 로또 번호과 중복되지 않는다.그렇지 않을 경우 예외가 발생한다.', () => {
    const wrongItems = Array.from(correctLotto);
    wrongItems.forEach((v) => {
      expect(() => new BonusBall(v, correctLotto)).toThrow(
        getErrorMessage(ERROR_MESSAGE.duplicateBonusBall),
      );
    });
  });

  test('보너스 번호와 당첨 로또 번호가 유효하면, BonusBall의 number는 보너스 번호를 값으로 가진다.', () => {
    const items = [
      { bonus: 1, lotto: [2, 3, 4, 5, 6, 7] },
      { bonus: 20, lotto: [21, 30, 40, 6, 13, 25] },
    ];

    items.forEach((v) => {
      expect(new BonusBall(v.bonus, v.lotto).getNumber()).toEqual(v.bonus);
    });
  });
});
