import App from '../src/App.js';

describe('구입 금액 입력 유효성 테스트', () => {
  test('입력된 값이 없을 때, 예외가 발생한다.', () => {
    const input = '';
    expect(() => {
      new App().validateUserPurchaseMoney(input);
    }).toThrow('[ERROR] 입력이 없습니다.');
  });

  test('입력된 값이 숫자가 아닐 때, 예외가 발생한다.', () => {
    const input = '가나다';
    expect(() => {
      new App().validateUserPurchaseMoney(input);
    }).toThrow('[ERROR] 입력이 숫자가 아닙니다.');
  });

  test('입력된 값이 0일 때, 예외가 발생한다.', () => {
    const input = '0';
    expect(() => {
      new App().validateUserPurchaseMoney(input);
    }).toThrow('[ERROR] 입력이 0 이하입니다');
  });

  test('입력된 값이 음수일 때, 예외가 발생한다.', () => {
    const input = '-1000';
    expect(() => {
      new App().validateUserPurchaseMoney(input);
    }).toThrow('[ERROR] 입력이 0 이하입니다');
  });

  test('입력된 값이 1,000원 단위가 아닐 때, 예외가 발생한다.', () => {
    const input = '1234';
    expect(() => {
      new App().validateUserPurchaseMoney(input);
    }).toThrow('[ERROR] 입력이 1,000원 단위가 아닙니다.');
  });
});

describe('당첨 번호 입력 유효성 테스트', () => {
  test('입력된 값이 없을 때, 예외가 발생한다.', () => {
    const input = '';
    expect(() => {
      new App().validateWinningNumbers(input);
    }).toThrow('[ERROR] 입력이 없습니다.');
  });

  test('입력된 값이 쉼표로 구분되지 않을 때, 예외가 발생한다.', () => {
    const input = '123456';
    expect(() => {
      new App().validateWinningNumbers(input);
    }).toThrow('[ERROR] 입력이 쉼표로 구분되지 않습니다.');
  });

  test('입력된 값이 6개가 아닐 때, 예외가 발생한다.', () => {
    const input = '1,2,3,4,5';
    expect(() => {
      new App().validateWinningNumbers(input);
    }).toThrow('[ERROR] 입력이 6개가 아닙니다.');
  });

  test('입력된 값에 중복이 있을 때, 예외가 발생한다.', () => {
    const input = '1,1,2,3,4,5';
    expect(() => {
      new App().validateWinningNumbers(input);
    }).toThrow('[ERROR] 입력에 중복된 값이 있습니다.');
  });

  test('입력된 값에 숫자가 아닌 값이 있을 때, 예외가 발생한다.', () => {
    const input = 'ㄱ,1,2,3,4,5';
    expect(() => {
      new App().validateWinningNumbers(input);
    }).toThrow('[ERROR] 입력이 숫자가 아닙니다.');
  });

  test('입력된 값에 1 ~ 45 사이가 아닌 값이 있을 때, 예외가 발생한다.', () => {
    const input = '46,1,2,3,4,5';
    expect(() => {
      new App().validateWinningNumbers(input);
    }).toThrow('[ERROR] 입력이 1 ~ 45 사이가 아닙니다');
  });
});

describe('보너스 번호 입력 유효성 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test('입력된 값이 없을 때, 예외가 발생한다.', () => {
    const input = '';
    expect(() => {
      new App().validateBonusNumber(winningNumbers, input);
    }).toThrow('[ERROR] 입력이 없습니다.');
  });

  test('입력된 값이 숫자가 아닐 때, 예외가 발생한다.', () => {
    const input = 'ㄱ';
    expect(() => {
      new App().validateBonusNumber(winningNumbers, input);
    }).toThrow('[ERROR] 입력이 숫자가 아닙니다.');
  });

  test('입력된 값이 1 ~ 45 사이가 아닐 때, 예외가 발생한다.', () => {
    const input = '46';
    expect(() => {
      new App().validateBonusNumber(winningNumbers, input);
    }).toThrow('[ERROR] 입력이 1 ~ 45 사이가 아닙니다');
  });

  test('입력된 값이 당첨 번호와 중복일 때, 예외가 발생한다.', () => {
    const input = '1';
    expect(() => {
      new App().validateBonusNumber(winningNumbers, input);
    }).toThrow('[ERROR] 입력이 당첨 번호와 중복되는 값입니다.');
  });
});
