import SYMBOL from './constants/symbol.js';

const MessageFormat = {
  lottoPurchaseHeader: count => `${count}개를 구매했습니다.`,
  lottoTicket: numbers => `[${numbers.join(SYMBOL.lottoNumberSeparator)}]`,
  formatNumber: number =>
    new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 1 }).format(number),
  lottoResultMessage: (matchCount, bonusMatch, prize, ticketCount) =>
    `${matchCount}개 일치${
      bonusMatch && ', 보너스 볼 일치'
    } (${MessageFormat.formatNumber(prize)}원) - ${ticketCount}개`,
  profitRateMessage: profitRate =>
    `총 수익률은 ${MessageFormat.formatNumber(profitRate)}%입니다.`,
};

export default MessageFormat;
