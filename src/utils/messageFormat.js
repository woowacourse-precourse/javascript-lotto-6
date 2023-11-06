import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import { formatNumberWithCommasAndDecimals } from './index.js';

export const MessageFormat = {
  error: (message) => `${ERROR.message.prefix} ${message}`,
  purchaseConfirm: (number) => `\n${number}개를 구매했습니다.`,
  resultRow: (key, winCount = 0) => {
    const prizeInfo = LOTTO.lottoPrizesMap.get(key);
    const prize = prizeInfo.prize.toLocaleString();
    const description = prizeInfo.description;

    return `${description} (${prize}원) - ${winCount}개`;
  },
  totalReturnRate: (rate) => `총 수익률은 ${formatNumberWithCommasAndDecimals(rate)}%입니다.`,
};
