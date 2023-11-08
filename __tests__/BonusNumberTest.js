import BonusNumber from '../src/BonusNumber';

describe('BonusNumber 클래스 테스트', () => {
  test.each([['dd'], ['9d']])(
    '보너스 번호에 숫자만 들어가지 않으면 예외가 발생한다.',
    number => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => {
        new BonusNumber(number, winningNumbers);
      }).toThrow('[ERROR]');
    },
  );

  test.each([
    [1, [1, 2, 3, 4, 5, 6]],
    [2, [2, 3, 4, 5, 6, 7]],
  ])(
    '당첨번호에 보너스번호가 포함되면(중복되면) 예외가 발생한다.',
    (number, winningNumbers) => {
      expect(() => {
        new BonusNumber(number, winningNumbers);
      }).toThrow('[ERROR]');
    },
  );

  test.each([['99'], ['0']])(
    '1~45 사이의 숫자가 아니면 예외가 발생한다.',
    number => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => {
        new BonusNumber(number, winningNumbers);
      }).toThrow('[ERROR]');
    },
  );
});
