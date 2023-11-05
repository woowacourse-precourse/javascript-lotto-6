import LOTTO from './lotto.js';

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  input: Object.freeze({
    invalidMoney: '올바른 금액을 입력해주세요.',
  }),
  lotto: Object.freeze({
    duplicatedNumber: '번호는 중복될 수 없습니다.',
    invalidNumber: `로또 번호는 ${LOTTO.range.min}~${LOTTO.range.max} 사이 정수여야 합니다.`,
    invalidSize: `로또 번호는 ${LOTTO.size}개여야 합니다.`,
    notDivisibleMoney: `구입 금액은 ${LOTTO.price}원 단위여야 합니다.`,
  }),
});

export default ERROR;
