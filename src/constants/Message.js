import {
  BONUS_BALL_FORM,
  CORRECT_NUMBER,
  DELIMITER,
  LOTTO_FORM,
  NUMBER_RANGE,
  WINNINGS,
} from './Rule.js';

const MESSAGE = Object.freeze({
  paymentQuery: `구입금액을 입력해 주세요.(${LOTTO_FORM.price}원 이상, ${
    LOTTO_FORM.price
  }원 단위의 숫자로 입력해주세요. 예시:${LOTTO_FORM.price * 1}, ${
    LOTTO_FORM.price * 5
  })`,
  numberOfTickets: '개를 구매했습니다.',
  winningNumbersQuery: `당첨 번호를 입력해 주세요.(당첨 번호는 ${LOTTO_FORM.range.min}~${LOTTO_FORM.range.max}까지의 숫자 ${LOTTO_FORM.length}자리로 이루어지며 "${DELIMITER}"을 사용해 숫자를 구별해주세요. 예시:1,2,3,4,5,6)`,
  bonusBallNumberQuery: `보너스 번호를 입력해 주세요.(보너스 번호는 ${LOTTO_FORM.range.min}~${LOTTO_FORM.range.max}의 숫자 중 이전에 입력한 당첨 번호와 중복되지 않는 하나의 숫자만 가능해요.)`,
});

const STATISTICS_MESSAGE = Object.freeze({
  header: '당첨 통계',
  division: '---',
  correctUnit: '개',
  rateOfReturn: {
    header: '총 수익률은 ',
    unit: '%',
    footer: '입니다.',
  },
});

const RANK_MESSAGE = Object.freeze({
  fifth: `3개 일치 (${WINNINGS[CORRECT_NUMBER.three]}원)`,
  fourth: `4개 일치 (${WINNINGS[CORRECT_NUMBER.four]}원)`,
  third: `5개 일치 (${WINNINGS[CORRECT_NUMBER.fiveNoBonus]}원)`,
  second: `5개 일치, 보너스 볼 일치 (${
    WINNINGS[CORRECT_NUMBER.fiveAndBonus]
  }원)`,
  first: `6개 일치 (${WINNINGS[CORRECT_NUMBER.six]}원)`,
});

const ERROR_MESSAGE = Object.freeze({
  header: '[ERROR]',
  isNotNumberArray: '숫자 배열이 아닙니다.',
  isNotNumber: '잘못된 형식입니다. 숫자를 사용해주세요.',
  range: `사용 가능한 숫자 범위는 ${NUMBER_RANGE.min}부터 ${NUMBER_RANGE.max}까지입니다.`,
  noDelimiter: `"${DELIMITER}"가 존재하지 않습니다. 숫자 사이에 "${DELIMITER}"를 사용해 숫자를 구별해주세요.`,
  sixNumbers: `로또 번호는 ${LOTTO_FORM.length}개여야 합니다.`,
  oneNumber: `보너스 번호는 ${BONUS_BALL_FORM.length}개여야 합니다.`,
  duplicateNumber:
    '중복된 숫자가 존재합니다. 로또 번호는 서로 다른 숫자로 이루어져야합니다.',
  payment: `구매 금액은 ${LOTTO_FORM.price}원 이상이며 ${LOTTO_FORM.price}원 단위여야합니다.`,
  duplicateBonusBall: '보너스 번호는 입력한 로또 번호 이외의 숫자여야 합니다.',
});

export { MESSAGE, ERROR_MESSAGE, STATISTICS_MESSAGE, RANK_MESSAGE };
