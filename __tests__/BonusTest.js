import Bonus from '../src/Bonus';

describe('보너스 번호 테스트', () => {
  test.each(['', ' ', 'a', 'abc', '1f'])(
    '숫자를 입력하지 않으면 예외처리한다.',
    (input) => {
      expect(() => {
        Bonus.generateBonus(input);
      }).toThrow('[ERROR] 숫자만 입력해주세요.');
    },
  );

  test.each(['0', '46'])(
    '1부터 45사이의 수가 아니면 예외처리한다.',
    (input) => {
      expect(() => {
        Bonus.generateBonus(input);
      }).toThrow('[ERROR] 1부터 45사이의 수를 입력해주세요.');
    },
  );
});
