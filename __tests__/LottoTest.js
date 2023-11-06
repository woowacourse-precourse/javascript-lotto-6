import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('번호의 개수가 6개보다 많으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('번호의 개수가 6개보다 적으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, '원', '-', 3, 4]);
    }).toThrow('[ERROR]');
  });

  test('번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1.234, 2.345, 3, 4, 5.6, 7]);
    }).toThrow('[ERROR]');
  });
  
  test('번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([46, 45, 43, 42, 41, 40]);
    }).toThrow('[ERROR]');
  });
});
