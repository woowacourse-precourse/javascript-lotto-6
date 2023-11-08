import Winning from '../../src/domain/Winning.js';

describe('당첨 판단 클래스 테스트', () => {
  let lottos, winningNumbers, bonusNumber;

  beforeEach(() => {
    lottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    winningNumbers = [1, 2, 3, 4, 5, 6];
    bonusNumber = 7;
  });

  describe('countMatchNumber() 메소드 테스트', () => {
    test('당첨 번호와 발행 번호 3개가 일치하는 경우를 확인한다.', () => {
      const lotto = [1, 2, 3, 7, 8, 9];
      const result = Winning.countMatchNumber(lotto, winningNumbers, bonusNumber);
      expect(result).toBe(0);
    });

    test('당첨 번호와 발행 번호 4개가 일치하는 경우를 확인한다.', () => {
      const lotto = [1, 2, 3, 4, 8, 9];
      const result = Winning.countMatchNumber(lotto, winningNumbers, bonusNumber);
      expect(result).toBe(1);
    });

    test('당첨 번호와 발행 번호 5개가 일치하는 경우를 확인한다.', () => {
      const lotto = [1, 2, 3, 4, 5, 9];
      const result = Winning.countMatchNumber(lotto, winningNumbers, bonusNumber);
      expect(result).toBe(2);
    });

    test('당첨 번호와 발행 번호 5개, 그리고 보너스 번호와 일치하는 경우를 확인한다.', () => {
      const lotto = [1, 2, 3, 4, 5, 7];
      const result = Winning.countMatchNumber(lotto, winningNumbers, bonusNumber);
      expect(result).toBe(3);
    });

    test('당첨 번호와 발행 번호 6개가 일치하는 경우를 확인한다.', () => {
      const lotto = [1, 2, 3, 4, 5, 6];
      const result = Winning.countMatchNumber(lotto, winningNumbers, bonusNumber);
      expect(result).toBe(4);
    });
  });

  describe('countWinning() 메소드 테스트', () => {
    test('발행된 여러 로또에 대한 당첨 여부를 올바르게 계산하는지 확인한다.', () => {
      const winnings = Winning.countWinning(lottos, winningNumbers, bonusNumber);
      expect(winnings).toEqual([1, 0, 0, 0, 0]);
    });
  });
});
