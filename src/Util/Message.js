import CONSTANTS from './Constants.js';

const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  winningAvgTitle: '\n당첨 통계\n---',
  purchaseCount: (purchaseCount) => `\n${purchaseCount}개를 구매했습니다.`,
  userLotto: (userLotto) => `[${userLotto.join(', ')}]`,
  three: (count) => `3개 일치 (${CONSTANTS['3'].toLocaleString()}원) - ${count}개`,
  four: (count) => `4개 일치 (${CONSTANTS['4'].toLocaleString()}원) - ${count}개`,
  five: (count) => `5개 일치 (${CONSTANTS['5'].toLocaleString()}원) - ${count}개`,
  six: (count) => `6개 일치 (${CONSTANTS['6'].toLocaleString()}원) - ${count}개`,
  seven: (count) => `5개 일치, 보너스 볼 일치 (${CONSTANTS['7'].toLocaleString()}원) - ${count}개`,
  profit: (profit) => `총 수익률은 ${profit.toLocaleString()}%입니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  isBlank: '[ERROR] 공백을 넣으면 안 됩니다.',
  isChar: '[ERROR] 문자를 입력하시면 안됩니다.',
  isNotThousandDivide: `[ERROR] ${CONSTANTS.lottoPrice}원으로 나누어 떨어지지 않습니다.`,
  isNotInRange: `[ERROR] 로또 번호는 ${CONSTANTS.lottoMin}부터 ${CONSTANTS.lottoMax} 사이의 숫자여야 합니다.`,
  isDuplicate: '[ERROR] 로또번호는 중복되면 안됩니다.',
  isNotLength: `[ERROR] 로또 번호는 ${CONSTANTS.lottoCount}개여야 합니다.`,
  isAmountSmall: `[ERROR] ${CONSTANTS.lottoPrice}보다 같거나 커야 합니다.`,
});

export { INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE };
