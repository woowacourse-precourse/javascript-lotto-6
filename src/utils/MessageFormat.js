const MessageFormat = {
  error: (message) => `[ERROR] ${message}`,
  purchaseCount: (count) => `\n${count}개를 구매했습니다.`,
  stringTicket: (ticket) => `[${ticket.join(', ')}]`,
  rankResult: (rank) => `
당첨 통계
---
3개 일치 (5,000원) - ${rank[5]}개
4개 일치 (50,000원) - ${rank[4]}개
5개 일치 (1,500,000원) - ${rank[3]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[2]}개
6개 일치 (2,000,000,000원) - ${rank[1]}개`,
};
export default MessageFormat;
