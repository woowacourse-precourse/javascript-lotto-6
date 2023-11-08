import Budget from '../src/Budget';
import { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_PRICE } from '../src/App';
describe('Budget 클래스 테스트', () => {
  test('예산이 유효한 경우', () => {
    const budget = new Budget(2000, MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_PRICE);
    expect(budget.budget).toBe(2000);
  });

  test('최소 금액 미달', () => {
    expect(() => new Budget(500)).toThrow('[ERROR] 숫자가 잘못된 형식입니다.');
  });

  test('최대 금액 초과', () => {
    expect(() => new Budget(110000)).toThrow('[ERROR] 숫자가 잘못된 형식입니다.');
  });

  test('구입 금액이 로또 한 장의 가격으로 나누어 떨어지지 않는 경우', () => {
    expect(() => new Budget(1500)).toThrow('[ERROR] 숫자가 잘못된 형식입니다.');
  });
});