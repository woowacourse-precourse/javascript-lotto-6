import BonusLotto from '../src/model/BonusLotto.js';
import WinningLotto from '../src/model/WinningLotto.js';

describe('보너스 번호 테스트', () => {
  test('보너스 번호 입력 형식이 단일한 숫자가 아니라면 예외 발생', () => {
    expect(() => {
      new BonusLotto('1,23,4');
    }).toThrow('[ERROR]');
  });

  test('숫자가 1-45의 범위에 없으면 예외 발생', () => {
    ['46,47,100'].forEach((number) => {
      expect(() => {
        new BonusLotto(number);
      }).toThrow('[ERROR]');
    });
  });

  test('보너스 번호가 당첨번호와 중복되면 예외 발생', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    expect(() => new BonusLotto('5', winningNumber)).toThrow('[ERROR]');
  });

  test('보너스 번호 공백이면 예외 발생', () => {
    const fn = jest.fn(() => [1, 2, 3, 4, 5, 6]);
    expect(() => new BonusLotto('', fn())).toThrow('[ERROR]');
  });
});
