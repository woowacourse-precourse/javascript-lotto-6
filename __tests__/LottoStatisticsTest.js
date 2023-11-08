import { MissionUtils } from '@woowacourse/mission-utils';
import LottoTickets from '../src/LottoTickets.js'
import Lotto from '../src/Lotto.js';
import BonusNumber from '../src/BonusNumber.js'

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};


describe('당첨 내역 및 통계 출력 테스트', () => {
  test.each([
    [1000, [7,8,9,10,11,13], [1,2,3,4,5,6], 12, 0, 0],
    [1000, [1,2,3,4,8,9], [1,2,3,4,5,6], 12, 50000, 50],
  ])(
    "로또 한 장 테스트 - 이 테스트에 대한 구입 금액은 %s원, 발행된 로또는 %s, 당첨 번호는 %s, 보너스 번호는 %s, 당첨 금액은 %s, 수익률은 %s%여야한다.",
    (money, randoms, winnings, bonus, expectedPrizeMoney, expectedStats) => {

      mockRandoms([randoms]);

      const tickets = new LottoTickets(money).publishTickets();
      const winningNumbers = new Lotto(winnings).returnWinningNumbers();
      const bonusNumber = new BonusNumber(bonus, winnings).returnValue();
      const stats = new Lotto(winnings).calculateWinningStats(tickets, [...winningNumbers, bonusNumber]);
      const profit = new Lotto(winnings).getProfits(stats)
      const rate = new Lotto(winnings).calculateRate(profit, money)
      console.log(`rate: ${rate}`)

      expect(winningNumbers).toEqual(winnings)
      expect(bonusNumber).toEqual(bonus)
      expect(profit).toEqual(expectedPrizeMoney)
      expect(String(rate.toFixed(1))).toEqual(String(expectedStats.toFixed(1)))
    },
  );

  test(
    "로또 여러 장 테스트",
    () => {
      const money = 2000;
      const randoms = [[1,2,3,4,5,7], [3,5,10,23,33,45]]
      const winnings = [1,3,6,10,45]
      const bonus = 5
      const result = [55000, 27.5]

      mockRandoms(randoms);

      const tickets = new LottoTickets(money).publishTickets();
      const winningNumbers = new Lotto(winnings).returnWinningNumbers();
      const bonusNumber = new BonusNumber(bonus, winnings).returnValue();
      const stats = new Lotto(winnings).calculateWinningStats(tickets, [...winningNumbers, bonusNumber]);
      const profit = new Lotto(winnings).getProfits(stats)
      const rate = new Lotto(winnings).calculateRate(profit, money)
      console.log(`rate: ${rate}`)

      expect(winningNumbers).toEqual(winnings)
      expect(bonusNumber).toEqual(bonus)
      expect(profit).toEqual(result[0])
      expect(rate).toEqual(result[1])
    },
  );
})