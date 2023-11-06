const MessageFormat = {
  error: (message) => `[ERROR] ${message}`,
  purchaseCount: (count) => `\n${count}개를 구매했습니다.`,
  stringTicket: (ticket) => `[${ticket.join(', ')}]`,
  gameResult: ({ rankBoard, profitAbility }) => `
당첨 통계
---
3개 일치 (5,000원) - ${rankBoard[5]}개
4개 일치 (50,000원) - ${rankBoard[4]}개
5개 일치 (1,500,000원) - ${rankBoard[3]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankBoard[2]}개
6개 일치 (2,000,000,000원) - ${rankBoard[1]}개
총 수익률은 ${profitAbility}%입니다.`,
};

export default MessageFormat;
