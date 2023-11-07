import WINNINGS from './winnings.js';

export const STATS_MESSAGES = [
  `3개 일치 (${WINNINGS.fifth.toLocaleString()}원) -`,
  `4개 일치 (${WINNINGS.fourth.toLocaleString()}원) -`,
  `5개 일치 (${WINNINGS.third.toLocaleString()}원) -`,
  `5개 일치, 보너스 볼 일치 (${WINNINGS.second.toLocaleString()}원) -`,
  `6개 일치 (${WINNINGS.first.toLocaleString()}원) -`,
];

export const INPUT_MESSAGES = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  result: '\n당첨 통계\n',
  divisionLine: '---',
  lottosQuantity: quantity => `\n${quantity}개를 구매했습니다.`,
  hits: (stat, index) => `${STATS_MESSAGES[index]} ${stat}개`,
  profitRate: profitRate => `총 수익률은 ${profitRate}%입니다.`,
});

export const ERROR_MESSAGES = Object.freeze({
  prefix: '[ERROR]',
  invalidType: '숫자만 입력해주세요.',
  invalidAmount: '구입 금액은 1,000원 단위로 입력해주세요.',
  invalidNumberLength: '로또 번호는 6개여야 합니다.',
  invalidUnique: '로또 번호는 서로 다른 숫자여야 합니다.',
  invalidNumberRange: '로또 번호의 숫자 범위는 1~45까지입니다.',
  invalidBonusNumber: '당첨 번호와 중복되지 않아야 합니다.',
  invalidPurchaseRange:
    '복권 및 복권기금법 제5조에 따라 1인당 10만원을 초과해서 구입할 수 없습니다.',
});
