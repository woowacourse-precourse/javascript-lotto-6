import LOTTO from './lotto.js';

const ERROR = Object.freeze({
  input: Object.freeze({
    invalidMoney: '[ERROR] 올바른 금액을 입력해주세요.',
  }),
  lotto: Object.freeze({
    numberOfLottoNumbers: '[ERROR] 로또 번호는 6개여야 합니다.',
    notDivisibleMoney: `[ERROR] 구입 금액은 ${LOTTO.price}원 단위여야 합니다.`,
  }),
});

export default ERROR;
