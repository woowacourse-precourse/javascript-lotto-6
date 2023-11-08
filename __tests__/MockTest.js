import { Random } from '@woowacourse/mission-utils';
import LottoGame from '../src/LottoGame.js';
import { NUMBERS_COUNT, TICKET_PRICE } from '../src/constants/Constants.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6]),
    pickNumberInRange: jest.fn().mockReturnValue(7),
  },
}));

describe('LottoGame', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  describe('purchaseTickets', () => {
    it('should purchase the correct number of tickets based on the amount', () => {
      const amount = TICKET_PRICE * 3; // 가정: 3000원짜리 로또 티켓 3개 구매
      Random.pickUniqueNumbersInRange.mockReturnValueOnce([1, 2, 3, 4, 5, 6]);

      lottoGame.purchaseTickets(amount);
      expect(lottoGame.getLottos().length).toBe(3);
    });
  });

  describe('drawWinningNumbers', () => {
    it('should draw 6 unique winning numbers and a bonus number', () => {
      Random.pickUniqueNumbersInRange.mockReturnValueOnce([1, 2, 3, 4, 5, 6]);
      Random.pickNumberInRange.mockReturnValueOnce(7);

      lottoGame.drawWinningNumbers();
      expect(lottoGame.getWinningNumbers().length).toBe(NUMBERS_COUNT);
      expect(lottoGame.getBonusNumber()).not.toBe(null);
      expect(lottoGame.getWinningNumbers()).not.toContain(
        lottoGame.getBonusNumber(),
      );
    });
  });

  describe('calculateResults', () => {
    it('should calculate results correctly', () => {
      // Setup: 구매한 티켓과 당첨 번호 설정
      lottoGame.purchaseTickets(TICKET_PRICE * 3);
      lottoGame.setWinningNumbers([1, 2, 3, 4, 5, 6]);
      lottoGame.setBonusNumber(7);

      const results = lottoGame.calculateResults();
      // 첫 번째 티켓이 6개 번호 모두 일치하는 경우를 가정
      expect(results[0].matchedNumbers).toBe(6);
      expect(results[0].rank).toBe('FIRST');
    });
  });
});
