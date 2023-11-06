import isValidCost from '../src/modules/isValidCost';

describe('입력값 유효성 검사 테스트', () => {
  describe('로또 구입 금액 유효성 검사 테스트', () => {
    test('입력 금액은 1000원 단위로 나누어 떨어지면 true를 반환한다.', () => {
      const cost = '14000';
      expect(isValidCost(cost)).toBeTruthy();
    });
    test('입력 금액이 1000원 단위로 나누어 떨어지지 않으면 false를 반환한다.', () => {
      const cost = '14010';
      expect(isValidCost(cost)).toBeFalsy();
    });
    test('입력 금액은 0-9까지의 숫자로 이루어지지 않는다면 false를 반환한다.', () => {
      const cost = '140e10';
      expect(isValidCost(cost)).toBeFalsy();
    });
  });
});
