import User from '../src/User.js';

describe('구입 금액 유효성 테스트', () => {
  test('구입 금액이 숫자가 아닐 때, 예외가 발생한다.', () => {
    const input = '가나다';
    expect(() => new User().setMoney(Number(input))).toThrow('[ERROR] 입력이 숫자가 아닙니다.');
  });

  test('구입 금액이 0일 때, 예외가 발생한다.', () => {
    const input = '0';
    expect(() => new User().setMoney(Number(input))).toThrow('[ERROR] 입력이 0 이하입니다');
  });

  test('구입 금액이 음수일 때, 예외가 발생한다.', () => {
    const input = '-1000';
    expect(() => new User().setMoney(Number(input))).toThrow('[ERROR] 입력이 0 이하입니다');
  });

  test('구입 금액이 1,000원 단위가 아닐 때, 예외가 발생한다.', () => {
    const input = '1234';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 입력이 1,000원 단위가 아닙니다.'
    );
  });
});
