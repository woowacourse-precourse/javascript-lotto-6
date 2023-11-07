import MessageFormat from '../../src/utils/MessageFormat';
import NUMBER from '../../src/utils/constants/number';

describe('MessageFormat 객체 테스트', () => {
  describe('lottoPurchaseHeader 함수', () => {
    it('주어진 숫자에 따라 올바른 구매 메시지를 반환한다', () => {
      const count = 5;
      expect(MessageFormat.lottoPurchaseHeader(count)).toBe(
        '5개를 구매했습니다.',
      );
    });
  });

  describe('lottoTicket 함수', () => {
    it('로또 번호 배열을 올바른 문자열로 변환한다', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      expect(MessageFormat.lottoTicket(numbers)).toBe('[1, 2, 3, 4, 5, 6]');
    });
  });

  describe('prize 함수', () => {
    it('금액을 한국 원화 형식으로 변환한다', () => {
      const prize = 1000000;
      const formattedPrize = new Intl.NumberFormat('ko-KR').format(prize);
      expect(MessageFormat.prize(prize)).toBe(formattedPrize);
    });
  });

  describe('profitRate 함수', () => {
    it('수익률을 포맷에 맞게 변환한다', () => {
      const profitRate = 1000.0;
      expect(MessageFormat.profitRate(profitRate)).toBe('1,000.0');
    });
  });

  describe('lottoResultMessage 함수', () => {
    it('로또 결과 메시지를 올바른 형식으로 반환한다', () => {
      const category = 'third';
      const prize = 1500000;
      const ticketCount = 2;
      const { matchCount, bonusMatch } =
        NUMBER.statistics.winningCriteria[category];
      const bonusMatchText = bonusMatch ? ', 보너스 볼 일치' : '';
      const expectedMessage = `${matchCount}개 일치${bonusMatchText} (${MessageFormat.prize(
        prize,
      )}원) - ${ticketCount}개`;
      expect(
        MessageFormat.lottoResultMessage(category, prize, ticketCount),
      ).toBe(expectedMessage);
    });
  });

  describe('profitRateMessage 함수', () => {
    it('총 수익률 메시지를 올바른 형식으로 반환한다', () => {
      const profitRate = 0.0;
      const expectedMessage = `총 수익률은 ${MessageFormat.profitRate(
        profitRate,
      )}%입니다.`;
      expect(MessageFormat.profitRateMessage(profitRate)).toBe(expectedMessage);
    });
  });
});
