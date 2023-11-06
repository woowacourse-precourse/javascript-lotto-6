import Bonus from '../src/Bonus.js';

describe('보너스 클래스 테스트', () => {
  test('번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('원');
    }).toThrow('[ERROR]');
  });

  test('번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(1.234);
    }).toThrow('[ERROR]');
  });
  
  test('번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(0);
    }).toThrow('[ERROR]');
  });

  test('번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(46);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
