import {
  paymentAmountValidater,
  winningNumbersValidater,
  bonusNumberValidater,
} from '../src/utils/validater';

describe('구매 금액 테스트', () => {
  test('구매 금액이 숫자가 아닐 때 예외 발생', () => {
    expect(() => {
      paymentAmountValidater.isntNumber('lotto');
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 공백일 때 예외 발생', () => {
    expect(() => {
      paymentAmountValidater.isntNumber('');
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 정수가 아닐 때 예외 발생', () => {
    expect(() => {
      paymentAmountValidater.isntInteger(1000.5);
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 1000 단위가 아닐 때 예외 발생', () => {
    expect(() => {
      paymentAmountValidater.outOfUnit(1999);
    }).toThrow('[ERROR]');
  });
});

describe('당첨 번호 테스트', () => {
  test('당첨 번호의 길이가 6미만일 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidater.length([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 공백일 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidater.isntNumber([1, 2, 3, 4, 5, ' ']);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 숫자가 아닐 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidater.isntNumber([1, 2, 3, 4, 5, 'lotto']);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 정수가 아닐 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidater.isntInteger([1, 2, 3, 4, 5, 6.5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 1 미만일 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidater.outOfRange([1, 2, 3, 4, 5, -1]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 45 초과일 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidater.outOfRange([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복이 있을 때 예외 발생', () => {
    expect(() => {
      winningNumbersValidater.duplicated([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('보너스 번호 테스트', () => {
  test('보너스 번호가 숫자가 아닐 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidater.isntNumber('lotto');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 공백일 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidater.isntNumber(' ');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 정수가 아닐 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidater.isntInteger(10.5);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 미만일 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidater.outOfRange(-1);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 45 초과일 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidater.outOfRange(46);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복 되었을 때 예외 발생', () => {
    expect(() => {
      bonusNumberValidater.duplicated(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
