import { validateMoney } from '../src/App';

describe('로또 발급 테스트', () => {
  test('1000원 단위가 아닐 시 예외가 발생한다.', () => {
    expect(() => {
      validateMoney(5200);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닐 시 예외가 발생한다.', () => {
    expect(() => {
      validateMoney('1000j');
    }).toThrow('[ERROR]');
  });
});
