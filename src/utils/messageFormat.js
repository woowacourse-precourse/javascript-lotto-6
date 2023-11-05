const MessageFormat = {
  error(message) {
    return `[ERROR] ${message}`;
  },

  purchasedQuantity(purchasedQuantity) {
    return `\n${purchasedQuantity}개를 구매하였습니다.`;
  },
};

export default MessageFormat;
