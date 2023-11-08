import Bonus from '../src/Bonus.js';

describe('보너스 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const inputBonusNumber = 'ㄱ';
    expect(() => {
      new Bonus(winningNumbers, inputBonusNumber);
    }).toThrow('[ERROR]');
  });
  test('보너스 번호가 1보다 작으면 예외가 발생한다.', () => {
    const inputBonusNumber = -1;
    expect(() => {
      new Bonus(winningNumbers, inputBonusNumber);
    }).toThrow('[ERROR]');
  });
  test('보너스 번호가 45보다 크면 예외가 발생한다.', () => {
    const inputBonusNumber = 77;
    expect(() => {
      new Bonus(winningNumbers, inputBonusNumber);
    }).toThrow('[ERROR]');
  });
  test('보너스 번호가 로또 번호와 중복되면 예외가 발생한다.', () => {
    const inputBonusNumber = 1;
    expect(() => {
      new Bonus(winningNumbers, inputBonusNumber);
    }).toThrow('[ERROR]');
  });
});
