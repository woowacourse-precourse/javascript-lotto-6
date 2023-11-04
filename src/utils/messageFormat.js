const MessageFormat = {
  error(message) {
    return `[ERROR] ${message}`;
  },

  purchasedQuantity(purchasedQuantity) {
    return `\n${purchasedQuantity}개를 구매하였습니다.`;
  },

  lotto(lotto) {
    return `[${lotto.join(', ')}]`;
  },

  purchasedLotto(purchasedLottos) {
    return purchasedLottos.map(this.lotto).join('\n');
  },
};

export default MessageFormat;
