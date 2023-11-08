const INPUT_MESSAGE = {
  amount: '구입금액을 입력해 주세요.\n',
  winning: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
};

const OUTPUT_MESSAGE = {
  purchase: (count) => `\n${count}개를 구매했습니다.`,
  result: '\n당첨 통계',
  stats: (lottoStats) => `3개 일치 (5,000원) - ${lottoStats[3]}개
4개 일치 (50,000원) - ${lottoStats[4]}개
5개 일치 (1,500,000원) - ${lottoStats[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoStats.bonus}개
6개 일치 (2,000,000,000원) - ${lottoStats[6]}개`,
  profit: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
};

const ERROR_MESSAGE = {
  notNumber: '[ERROR] 숫자가 잘못된 형식입니다.',
  notDivide: '[ERROR] 금액 단위가 맞지 않습니다.',
  length: '[ERROR] 로또 번호는 중복 없이 6개여야 합니다.',
  range: '[ERROR] 1~45 범위가 아닌 번호가 존재합니다.',
  duplication: '[ERROR] 이미 당첨 번호에 존재하는 번호입니다.',
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
