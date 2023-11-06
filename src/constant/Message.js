import { BONUS_BALL_FORM, LOTTO_FORM, NUMBER_RANGE, WINNINGS } from './Rule';

const MESSAGE = Object.freeze({
  paymentQuery: `구입금액을 입력해 주세요.(${LOTTO_FORM.price}원 이상, ${LOTTO_FORM.price}원 단위의 숫자로 입력해주세요. 예시:1000, 2000)`,
  numberOfTickets: '개를 구매했습니다.',
  winningNumbersQuery: `당첨 번호를 입력해 주세요.(당첨 번호는 ${LOTTO_FORM.range.min}~${LOTTO_FORM.range.max}까지의 숫자 6자리로 이루어지며 ","을 사용해 숫자를 구별해주세요. 예시:1,2,3,4,5,6)`,
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
  three: `3개 일치 (${WINNINGS.three}원)`,
  four: `4개 일치 (${WINNINGS.four}원)`,
  fiveNoBonus: `5개 일치 (${WINNINGS.fiveNoBonus}원)`,
  fiveAndBonus: `5개 일치, 보너스 볼 일치 (${WINNINGS.fiveAndBonus}원)`,
  six: `6개 일치 (${WINNINGS.six}원)`,
});

const ERROR_MESSAGE = Object.freeze({
  header: '[ERROR]',
  isNotNumberArray: '숫자 배열이 아닙니다.',
  isNotNumber: '잘못된 형식입니다. 숫자를 사용해주세요.',
  range: `사용 가능한 숫자 범위는 ${NUMBER_RANGE.min}부터 ${NUMBER_RANGE.max}까지입니다.`,
  noReset:
    '쉼표가 존재하지 않습니다. 숫자 사이에 쉼표를 사용해 숫자를 구별해주세요.',
  sixNumbers: `로또 번호는 ${LOTTO_FORM.length}개여야 합니다.`,
  oneNumber: `보너스 번호는 ${BONUS_BALL_FORM.length}개여야 합니다.`,
  duplicateNumber:
    '중복된 숫자가 존재합니다. 로또 번호는 서로 다른 숫자로 이루어져야합니다.',
  payment: `구매 금액은 ${LOTTO_FORM.price}원 이상이며 ${LOTTO_FORM.price}원 단위여야합니다.`,
  duplicateBonusBall: '보너스 번호는 입력한 로또 번호 이외의 숫자여야 합니다.',
});

export { MESSAGE, ERROR_MESSAGE, STATISTICS_MESSAGE, RANK_MESSAGE };
