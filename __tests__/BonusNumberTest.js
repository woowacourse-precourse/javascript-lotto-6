import { errorConstants } from '../src/constants/index.js';
import { BonusNumber } from '../src/lotto/index.js';

describe('보너스 번호 클래스 테스트', () => {
  test('숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(['a']);
    }).toThrow(errorConstants.NOT_A_NUMBER);
  });
  test.each([[0], ['']])('0이 입력되면 예외가 발생한다.', (bonusNumber) => {
    expect(() => {
      new BonusNumber(bonusNumber);
    }).toThrow(errorConstants.NOT_ZERO);
  });
  test.each([[' 1'], ['3 '], [' 12 ']])(
    '입력의 양옆에 공백이 있으면 예외가 발생한다.',
    (bonusNumber) => {
      expect(() => {
        new BonusNumber(bonusNumber);
      }).toThrow(errorConstants.NOT_EMPTY);
    },
  );
  test('범위 내의 수가 아니면 예외가 발생한다.(1~45)', () => {
    expect(() => {
      new BonusNumber([67]);
    }).toThrow(errorConstants.NOT_IN_RANGE);
  });
  test('당첨 번호와 중복되면 예외가 발생한다.', () => {
    const lotto = [1, 2, 34, 4, 5, 6];
    const bonus = 1;
    expect(() => {
      lotto.forEach((el) => {
        if (expect(el).toBe(bonus))
          toThrow(errorConstants.NOT_SAME_LOTTO_NUMBER);
      });
    });
  });
});
