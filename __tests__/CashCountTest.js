import { CashCount } from '../src/CashCount.js';

//CashCount 클래스 테스트
describe('cashcount 클래스 테스트', () => {
  test('1000원 나누어 떨어지나', () => {
    expect(() => {
      new CashCount(123);
    }).toThrow('[ERROR]');
  });
  test('숫자인가', () => {
    expect(() => {
      new CashCount(NaN);
    }).toThrow('[ERROR]');
  });
});
