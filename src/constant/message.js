import { BASE_AMOUNT, LOTTO_NUMBERS } from './constant.js';

export const MESSAGE = {
  enterPurchaseAmount: '구입금액을 입력해 주세요.\n',
  enterWinningNumbers: '당첨 번호를 입력해 주세요.\n',
  enterBonusNumber: '보너스 번호를 입력해 주세요.\n',
  purchasedQuantity: (quantity) => `${quantity}개를 구매했습니다.`,
  winningStatistics: '당첨 통계',
  line: '---',
  rankResult: (match, prize, count) => `${match}개 일치 (${prize}원) - ${count}개`,
  bonusRankResult: (match, prize, count) =>
    `${match}개 일치, 보너스 볼 일치 (${prize}원) - ${count}개`,
  totalProfit: (profit) => `총 수익률은 ${profit}%입니다.`,
};

export const ERROR = {
  errorPrefix: '[ERROR]',
  isEmpty: '공백이 입력되었습니다. 다시 입력해주세요.',
  isNotNumber: '숫자가 아닌 값이 입력되었습니다. 숫자만 입력 가능합니다.',
  isNotPositive: '양수가 아닌 값이 입력되었습니다. 양수만 입력 가능합니다.',
  isNotInUnit: `${BASE_AMOUNT} 단위가 아닌 값이 입력되었습니다. 1000원 단위만 입력 가능합니다.`,
  invalidCount: `요소의 개수가 ${LOTTO_NUMBERS.count}가 아닙니다. 전체 번호는 6개의 숫자로 구성되어야 합니다.`,
  hasNonNumeric: '숫자가 아닌 요소를 가지고 있습니다. 번호는 모두 숫자로 구성되어야 합니다.',
  hasNotInRange: `${LOTTO_NUMBERS.min}~${LOTTO_NUMBERS.max} 사이의 숫자가 아닌 요소가 있습니다. 번호는 해당 범위 안의 숫자로만 구성되어야 합니다.`,
  hasDuplicate: '중복된 요소가 있습니다. 번호는 모두 다른 숫자로 구성되어야 합니다.',
  isNotInRange: `${LOTTO_NUMBERS.min}~${LOTTO_NUMBERS.max} 사이의 숫자가 아닙니다. 번호는 해당 범위 안의 숫자여야 합니다.`,
  hasSameNumber:
    '당첨 번호와 중복되는 번호가 입력되었습니다. 보너스 번호는 당첨 번호와 다른 숫자여야 합니다.',
};

export const SEPARATOR = ',';
