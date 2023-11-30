import ValidateBonus from '../src/module/ValidateBonus.js';
import ValidatePurchase from '../src/module/ValidatePurchase.js';

describe('구입금액 입력 예외 테스트', () => {
  test('구입금액이 숫자가 아니면 예외가 발생한다.', () => {
    const USER_INPUT = '가나다';
    expect(() => {
      new ValidatePurchase(USER_INPUT);
    }).toThrow('[ERROR] 구입금액을 숫자로 입력해 주세요.');
  });

  test('구입금액이 입력되지 않으면 예외가 발생한다.', () => {
    const USER_INPUT = '';
    expect(() => {
      new ValidatePurchase(USER_INPUT);
    }).toThrow('[ERROR] 구입금액을 숫자로 입력해 주세요.');
  });

  test('구입금액이 0원이면 예외가 발생한다.', () => {
    const USER_INPUT = '0';
    expect(() => {
      new ValidatePurchase(USER_INPUT);
    }).toThrow('[ERROR] 1000원 단위로 입력해 주세요.');
  });

  test('구입금액이 -2000원이면 예외가 발생한다.', () => {
    const USER_INPUT = '0';
    expect(() => {
      new ValidatePurchase(USER_INPUT);
    }).toThrow('[ERROR] 1000원 단위로 입력해 주세요.');
  });

  test('구입금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    const USER_INPUT = '1500';
    expect(() => {
      new ValidatePurchase(USER_INPUT);
    }).toThrow('[ERROR] 1000원 단위로 입력해 주세요.');
  });

  test('구입금액이 0으로 시작하면 예외가 발생한다.', () => {
    const USER_INPUT = '01500';
    expect(() => {
      new ValidatePurchase(USER_INPUT);
    }).toThrow('[ERROR] 구입금액을 숫자로 입력해 주세요.');
  });

  test('구입금액에 빈 공간이 입력되면 예외가 발생한다.', () => {
    const USER_INPUT = '1500 ';
    expect(() => {
      new ValidatePurchase(USER_INPUT);
    }).toThrow('[ERROR] 입력에 빈 공간이 있으면 안됩니다.');
  });
});

describe('보너스 입력 예외처리 테스트', () => {
  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const USER_INPUT = '가';
    expect(() => {
      new ValidateBonus(USER_INPUT);
    }).toThrow('[ERROR] 보너스 번호는 숫자여야 합니다.');
  });

  test('보너스 번호의 범위가 1~45가 아니면 예외가 발생한다.', () => {
    const USER_INPUT = '99';
    expect(() => {
      new ValidateBonus(USER_INPUT);
    }).toThrow('[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.');
  });

  test('보너스 번호가 당첨 번호가 중복되면 예외가 발생한다.', () => {
    const USER_INPUT = '4';
    const WINNING_NUMBERS = '1,2,3,4,5,6';
    expect(() => {
      new ValidateBonus(USER_INPUT, WINNING_NUMBERS);
    }).toThrow('[ERROR] 보너스 번호는 로또 번호와 중복되지 않아야 합니다.');
  });

  test('보너스 번호에 빈 공간이 입력되면 예외가 발생한다.', () => {
    const USER_INPUT = ' 3';
    expect(() => {
      new ValidateBonus(USER_INPUT);
    }).toThrow('[ERROR] 입력에 빈 공간이 있으면 안됩니다.');
  });
});
