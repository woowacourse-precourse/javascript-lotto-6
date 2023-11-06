import Money from '../src/Money.js';

describe('머니 클래스 테스트', () => {
  test('구입금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Money('8000원!');
    }).toThrow('[ERROR]');
  });

  test('구입금액이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Money('8000.1234');
    }).toThrow('[ERROR]');
  });
  
  test('구입금액이 양수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Money('-8000');
    }).toThrow('[ERROR]');
  });

  test('구입금액이 1,000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Money('8282');
    }).toThrow('[ERROR]');
  });
});
