const MESSAGE = Object.freeze({});
import {
  BONUS_BALL_FORM,
  LOTTO_FORM,
  NUMBER_RANGE,
  WINNING_AMOUNT,
} from './Rule';

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

export { MESSAGE, ERROR_MESSAGE };
