export const RESULT_MESSAGE = {
  rank: (rank) => {
    return `
  당첨 통계
  ---
  3개 일치 (5,000원) - ${rank[3]}개
  4개 일치 (50,000원) - ${rank[4]}개
  5개 일치 (1,500,000원) - ${rank[5]}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[7]}개
  6개 일치 (2,000,000,000원) - ${rank[6]}개
  `;
  },

  benefit: (benfit) => {
    return `총 수익률은 ${benfit}%입니다.`;
  },

  count: (count) => {
    return `\n${count}개를 구매했습니다.`;
  },
};
