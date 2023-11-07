import Cash from '../src/domain/Cash.js';

describe('캐시 클래스 테스트', () => {
  test('캐시가 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Cash('Hello');
    }).toThrow('[ERROR]');
  });

  test('캐시가 정수가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Cash(1.5);
    }).toThrow('[ERROR]');
  });

  test('캐시가 음의 정수라면 예외가 발생한다.', () => {
    expect(() => {
      new Cash(-10);
    }).toThrow('[ERROR]');
  });

  test('캐시가 0이라면 예외가 발생한다.', () => {
    expect(() => {
      new Cash(0);
    }).toThrow('[ERROR]');
  });

  test('캐시가 1000으로 나누어 떨어지지 않는다면 예외가 발생한다.', () => {
    expect(() => {
      new Cash(1234);
    }).toThrow('[ERROR]');
  });
});
