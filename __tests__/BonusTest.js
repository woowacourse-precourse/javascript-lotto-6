import Bonus from '../src/domain/Bonus.js';

describe('보너스 번호 클래스 테스트', () => {
  test('보너스 번호의 개수가 1개가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('1,2,3');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 숫자가 아닌 값이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(true);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 정수가 아닌 값이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(6.5);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 1보다 적은 값이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(0);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 45보다 큰 값이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(47);
    }).toThrow('[ERROR]');
  });
});
