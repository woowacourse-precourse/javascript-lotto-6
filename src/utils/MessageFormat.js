const MessageFormat = {
  error: (message) => `[ERROR] ${message}`,
  purchaseCount: (count) => `\n${count}개를 구매했습니다.`,
  stringTicket: (ticket) => `[${ticket.join(', ')}]`,
};
export default MessageFormat;
