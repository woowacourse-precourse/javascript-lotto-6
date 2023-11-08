import WinLotto from '../src/models/WinLotto';
import Lotto from '../src/models/Lotto';

describe('WinLotto 클래스 테스트', () => {
  const lotteryList = [
    { lottery: [6, 21, 23, 41, 42, 43], countWinning: 1, countBonus: 0 },
    { lottery: [1, 2, 3, 4, 5, 6], countWinning: 6, countBonus: 0 },
    { lottery: [7, 11, 16, 35, 36, 44], countWinning: 0, countBonus: 1 },
  ];
  const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
  const bonusNumber = 7;
  const winningLotto = new WinLotto([winningNumbers, bonusNumber]);

  /* private 선언으로 테스트 불가
  test.each(lotteryList)(
    '당첨된 번호가 몇개인지 카운트한다.',
    ({ lottery, countWinning }) => {
      expect(winningLotto.countWinNumbers(lottery)).toBe(countWinning);
    }
  );

  test.each(lotteryList)(
    '보너스 번호가 몇개인지 카운트한다.',
    ({ lottery, countBonus }) => {
      expect(winningLotto.countBonusNumber(lottery)).toBe(countBonus);
    }
  ); */

  test.each(lotteryList)(
    '로또 번호가 주어졌을 때 일치하는 번호가 몇개인지 카운트한다.',
    ({ lottery, countWinning, countBonus }) => {
      const lotto = new Lotto(lottery);
      expect(winningLotto.countMatchingNumbers(lotto)).toEqual([
        countWinning,
        countBonus,
      ]);
    }
  );
});
