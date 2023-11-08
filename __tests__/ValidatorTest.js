import {
  paymentAmountValidator,
  winningNumbersValidator,
  bonusNumberValidator,
} from '../src/utils/validator';

describe('구매 금액 테스트', () => {
  test('구매 금액이 숫자가 아닐 때 예외 발생', () => {
    expect(() => {
      paymentAmountValidator.isntNumber('lotto');
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 공백일 때 예외 발생', () => {
    expect(() => {
      paymentAmountValidator.isntNumber('');
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 정수가 아닐 때 예외 발생', () => {
    expect(() => {
      paymentAmountValidator.isntInteger(1000.5);
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 1000 단위가 아닐 때 예외 발생', () => {
    expect(() => {
      paymentAmountValidator.outOfUnit(1999);
    }).toThrow('[ERROR]');
  });
});

describe('당첨 번호 테스트', () => {
  test('당첨 번호의 길이가 6미만일 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidator.length([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 공백일 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidator.isntNumber([1, 2, 3, 4, 5, ' ']);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 숫자가 아닐 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidator.isntNumber([1, 2, 3, 4, 5, 'lotto']);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 정수가 아닐 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidator.isntInteger([1, 2, 3, 4, 5, 6.5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 1 미만일 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidator.outOfRange([1, 2, 3, 4, 5, -1]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 45 초과일 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidator.outOfRange([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복이 있을 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidator.duplicated([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('보너스 번호 테스트', () => {
  test('보너스 번호가 숫자가 아닐 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidator.isntNumber('lotto');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 공백일 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidator.isntNumber(' ');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 정수가 아닐 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidator.isntInteger(10.5);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 미만일 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidator.outOfRange(-1);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 45 초과일 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidator.outOfRange(46);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복 되었을 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidator.duplicated(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
