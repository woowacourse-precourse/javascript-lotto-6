import CONSTANTS from './constants.js';

const read = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const result = Object.freeze({
  title: '\n당첨 통계\n---',
});

const winningStatistics = Object.freeze({
  [CONSTANTS.match.threeMatch]: `3개 일치 (5,000원) - `,
  [CONSTANTS.match.fourMatch]: `4개 일치 (50,000원) - `,
  [CONSTANTS.match.fiveMatch]: `5개 일치 (1,500,000원) - `,
  [CONSTANTS.match.fiveMatchWithBonus]: `5개 일치, 보너스 볼 일치 (30,000,000원) - `,
  [CONSTANTS.match.sixMatch]: `6개 일치 (2,000,000,000원) - `,
});

const MESSAGE = Object.freeze({
  read,
  result,
  winningStatistics,
});

export default MESSAGE;
