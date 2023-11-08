import Bonus from '../src/Bonus';
import ERROR_MESSAGE from '../src/constants/error';

describe('보너스 번호 테스트', () => {
  let winningLotto;
  beforeEach(() => {
    winningLotto = [10, 11, 12, 13, 14, 15];
  });

  test.each(['1', '7', '8', '9', '45'])(
    '1부터 45사이의 당첨번호와 중복되지 않는 숫자만 유효합니다.',
    (input) => {
      expect(() => {
        new Bonus(input, winningLotto);
      }).not.toThrow();
    },
  );

  test.each(['', ' ', 'a', 'abc', '1f'])(
    '숫자를 입력하지 않으면 예외처리한다.',
    (input) => {
      expect(() => {
        new Bonus(input, winningLotto);
      }).toThrow(ERROR_MESSAGE.notNumber);
    },
  );

  test.each(['0', '46'])(
    '1부터 45사이의 수가 아니면 예외처리한다.',
    (input) => {
      expect(() => {
        new Bonus(input, winningLotto);
      }).toThrow(ERROR_MESSAGE.invalidLottoNumRange);
    },
  );

  test('당첨번호와 보너스번호가 중복되면 예외처리한다.', () => {
    const bonus = '10';
    expect(() => {
      new Bonus(bonus, winningLotto);
    }).toThrow(ERROR_MESSAGE.duplicatedWinningLotto);
  });
});
