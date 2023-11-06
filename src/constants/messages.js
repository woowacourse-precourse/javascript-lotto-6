import { LOTTO } from './lotto.js';

const INPUT_MESSAGE = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

const PURCHASE_MESSAGE = (count) => `\n${count}개를 구매했습니다.`;

const MATCHING_MESSAGE = [
  '3개 일치',
  '4개 일치',
  '5개 일치',
  '5개 일치, 보너스 볼 일치',
  '6개 일치',
];

const STATISTICS_MESSAGE = {
  output: '\n당첨 통계\n---',
  result(idx, count, prize) {
    return `${
      MATCHING_MESSAGE[idx]
    } (${prize.toLocaleString()}원) - ${count}개`;
  },
  rateOfReturn(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  },
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  invalidType: `${ERROR_PREFIX} 숫자만 입력 가능합니다.`,
  invalidInteger: `${ERROR_PREFIX} 정수만 입력 가능합니다.`,
  invalidLottoRange: `${ERROR_PREFIX} 로또 번호는 ${LOTTO.range.start}부터 ${LOTTO.range.end} 사이의 숫자여야 합니다.`,
  invalidLottoLength: `${ERROR_PREFIX} 로또 번호는 ${LOTTO.length}개여야 합니다.`,
  duplicateLottoNumber: `${ERROR_PREFIX} 로또 번호는 중복될 수 없습니다.`,
  invalidUnit: `구입 금액은 ${ERROR_PREFIX} 로또 구입 금액은 ${LOTTO.price}원 단위로 입력해야 합니다.`,
  invalidAmount: `${ERROR_PREFIX} 구입 금액은 ${LOTTO.price}원 이상이어야 합니다.`,
  invalidBonusNumber: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 달라야 합니다.`,
};

export { INPUT_MESSAGE, PURCHASE_MESSAGE, STATISTICS_MESSAGE, ERROR_MESSAGE };
