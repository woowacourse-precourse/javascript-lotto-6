import Bonus from '../src/Bonus.js';

describe('보너스 클래스 테스트', () => {
  test('보너스 번호에 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('1j', ['1', '2', '3', '4', '5', '6']);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('0', ['1', '2', '3', '4', '5', '6']);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('47', ['1', '2', '3', '4', '5', '6']);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호와 중복될 경우 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('3', ['1', '2', '3', '4', '5', '6']);
    }).toThrow('[ERROR]');
  });
});
