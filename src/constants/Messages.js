import { LOTTO } from './System.js';

export const INPUT_MESSAGE = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
};

export const OUTPUT_MESSAGE = {
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGE_FUNCTION = {
  userLottos(userLottos) {
    return `\n${userLottos.length}개를 구매했습니다.`;
  },
};

export const ERROR_MESSAGE = {
  prefix: '\n[ERROR]',
  emptyString: '빈문자열은 입력하실 수 없습니다.\n',
  number: '숫자 외의 문자가 포함되어있습니다.\n',
  integer: '정수만 입력이 가능합니다.\n',
  duplication: '중복되는 숫자는 입력하실 수 없습니다.\n',
  count: '로또 번호는 6개여야 합니다.\n',
};

export const ERROR_MESSAGE_FUNCTION = {
  divide(divisor) {
    return `${divisor}원 단위로만 구매가능합니다.\n`;
  },
  purchaseAmountMax(max) {
    return `로또 구입 금액은 ${max.toLocaleString()}원을 초과할 수 없습니다.\n`;
  },
  validScope(start = LOTTO.numberRangeStart, end = LOTTO.numberRangeEnd) {
    return `${start}~${end}사이의 숫자만 입력이 가능합니다.\n`;
  },
};
