import NUMBER from './constants/number.js';
import SYMBOL from './constants/symbol.js';

const { statistics } = NUMBER;
const { winningCriteria } = statistics;

const MessageFormat = {
  lottoPurchaseHeader: count => `${count}개를 구매했습니다.`,
  lottoTicket: numbers => `[${numbers.join(SYMBOL.lottoNumberSeparator)}]`,
  formatPrize: prize => new Intl.NumberFormat('ko-KR').format(prize),
  formatProfitRate: profitRate =>
    new Intl.NumberFormat('ko-KR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(profitRate),
  lottoResultMessage: (category, prize, ticketCount) => {
    const { matchCount, bonusMatch } = winningCriteria[category];
    return `${matchCount}개 일치${
      bonusMatch ? ', 보너스 볼 일치' : ''
    } (${MessageFormat.formatPrize(prize)}원) - ${ticketCount}개`;
  },
  profitRateMessage: profitRate =>
    `총 수익률은 ${MessageFormat.formatProfitRate(profitRate)}%입니다.`,
};

export default MessageFormat;
