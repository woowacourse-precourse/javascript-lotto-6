import NUMBER from './constants/number';
import SYMBOL from './constants/symbol';

const { statistics } = NUMBER;
const { winningCriteria } = statistics;

const prizeNumberFormatter = new Intl.NumberFormat('ko-KR');
const profitRateFormatter = new Intl.NumberFormat('ko-KR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const MessageFormat = {
  lottoPurchaseHeader: count => `${count}개를 구매했습니다.`,
  lottoTicket: numbers => `[${numbers.join(SYMBOL.lottoNumberSeparator)}]`,
  prize: prize => prizeNumberFormatter.format(prize),
  profitRate: profitRate => profitRateFormatter.format(profitRate),
  lottoResultMessage: (category, prize, ticketCount) => {
    const { matchCount, bonusMatch } = winningCriteria[category];
    const bonusMatchText = bonusMatch ? ', 보너스 볼 일치' : '';
    return `${matchCount}개 일치${bonusMatchText} (${MessageFormat.prize(
      prize,
    )}원) - ${ticketCount}개`;
  },
  profitRateMessage: profitRate =>
    `총 수익률은 ${MessageFormat.profitRate(profitRate)}%입니다.`,
};

export default MessageFormat;
