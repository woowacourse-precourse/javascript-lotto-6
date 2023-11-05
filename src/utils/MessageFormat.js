const MessageFormat = {
  error: (message) => `[ERROR] ${message}`,
  purchaseCount: (count) => `\n${count}개를 구매했습니다.`,
  stringTicket: (ticket) => `[${ticket.join(', ')}]`,
  rankResult: (rank) => `
  \n당첨 통계
  \n---
  \n3개 일치 (5,000원) - ${rank[5]}개
  \n4개 일치 (50,000원) - ${rank[4]}개
  \n5개 일치 (1,500,000원) - ${rank[3]}개
  \n5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[2]}개
  \n6개 일치 (2,000,000,000원) - ${rank[1]}개`,
};
export default MessageFormat;
