import LOTTO from './Lotto.js';

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  empty: '공백이 아닌 값을 입력해주세요.',
  isNan: '숫자를 입력해주세요.',
  price: `금액은 ${LOTTO.price}원 단위로 입력해주세요.`,
  range: `번호는 ${LOTTO.minLottoNum} ~ ${LOTTO.maxLottoNum} 사이의 값으로 입력해주세요.`,
  count: `당첨 번호는 ${LOTTO.count}개로 입력해주세요.`,
  duplicated: '로또 번호는 중복이 없도록 입력해주세요.',
  bonusNumberDup: '보너스 번호가 중복되지 않도록 입력해주세요.',
  moneyRange: `금액은 ${LOTTO.minMoney} ~ ${LOTTO.maxMoney} 사이의 값으로 입력해주세요.`,
  negativeMoney: '금액은 양수로 입력해주세요.',
});

export default ERROR;
