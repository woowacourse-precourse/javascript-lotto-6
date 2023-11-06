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
