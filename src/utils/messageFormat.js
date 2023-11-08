import Prize from '../Domain/Prize.js';

const MessageFormat = {
  error(message) {
    return `[ERROR] ${message}`;
  },

  purchasedQuantity(purchasedQuantity) {
    return `\n${purchasedQuantity}개를 구매했습니다.`;
  },

  totalPrize(prizeCount) {
    return Array.from(Prize.prizeMap)
      .map(([key, { message }]) => `${message}${prizeCount[key] || 0}개`)
      .join('\n');
  },

  profitRate(profitRate) {
    return `총 수익률은 ${profitRate}%입니다.`;
  },
};

export default MessageFormat;
