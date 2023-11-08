import { PRIZE } from './constant.js';

export const USER_INPUT = {
  purchaseAmount: '구매금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

export const ANNOUNCEMENT = {
  purchase: (amount) => `\n${amount}개를 구매했습니다.`,
  winningStatistics: (
    { first, second, third, fourth, fifth },
    rateOfReturn
  ) => {
    return (
      `\n당첨 통계\n` +
      `---\n` +
      `3개 일치 (${PRIZE.fifth.toLocaleString()}원) - ${fifth}개\n` +
      `4개 일치 (${PRIZE.fourth.toLocaleString()}원) - ${fourth}개\n` +
      `5개 일치 (${PRIZE.third.toLocaleString()}원) - ${third}개\n` +
      `5개 일치, 보너스 볼 일치 (${PRIZE.second.toLocaleString()}원) - ${second}개\n` +
      `6개 일치 (${PRIZE.first.toLocaleString()}원) - ${first}개\n` +
      `총 수익률은 ${(+rateOfReturn).toLocaleString()}%입니다.`
    );
  },
};

export const ERROR = {
  array: {
    quantityMismatch: '[ERROR] 로또 번호는 6개여야 합니다.',
    duplicate: '[ERROR] 중복되는 번호가 있습니다.',
  },
  number: {
    range: '[ERROR] 1 이상 45 이하의 정수를 입력해주세요',
    duplicateBonus: '[ERROR] 당첨 번호와 중복되는 번호가 입력되었습니다.',
  },
  purchaseAmount: {
    indivisibleBy1000: '[ERROR] 구매 금액은 1,000원 단위여야 합니다.',
    negative: '[ERROR] 구매 금액은 양수여야 합니다.',
    notANumber: '[ERROR] 구매 금액은 숫자여야 합니다.',
  },
};
