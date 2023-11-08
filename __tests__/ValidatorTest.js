import Lotto from '../src/Lotto.js';
import { validatePurchase, validateBonusNumber } from '../src/utilities.js';

describe('구매 금액 검증 함수 기능 테스트', () => {
  test('숫자가 아닐 경우 예외가 발생한다.', () => {
    const INPUT = 'asdf';

    expect(() => {
      validatePurchase(INPUT);
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 1000의 배수가 아닐 경우 예외가 발생한다.', () => {
    const INPUT = '1';

    expect(() => {
      validatePurchase(INPUT);
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 음수일 경우 예외가 발생한다.', () => {
    const INPUT = '-1000';

    expect(() => {
      validatePurchase(INPUT);
    }).toThrow('[ERROR]');
  });
});

describe('보너스 번호 검증 함수 기능 테스트', () => {
  const LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);

  test('보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.', () => {
    const BONUS_NUMBER = '6';

    expect(() => {
      validateBonusNumber(LOTTO, BONUS_NUMBER);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 소수점이 있을 경우 예외가 발생한다.', () => {
    const BONUS_NUMBER = '1.5';

    expect(() => {
      validatePurchase(LOTTO, BONUS_NUMBER);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생한다.', () => {
    const BONUS_NUMBER = 'asdf';

    expect(() => {
      validatePurchase(LOTTO, BONUS_NUMBER);
    }).toThrow('[ERROR]');
  });

  test('숫자가 1~45에 해당하지 않으면 예외가 발생한다.', () => {
    const BONUS_NUMBER = 'asdf';

    expect(() => {
      validatePurchase(LOTTO, BONUS_NUMBER);
    }).toThrow('[ERROR]');
  });
});
