import LOTTO from './Lotto.js';

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  empty: '공백이 아닌 값을 입력해주세요.',
  isNan: '숫자를 입력해주세요.',
  money: `금액은 ${LOTTO.price}원 단위로 입력해주세요.`,
  range: `번호는 ${LOTTO.minLottoNum} ~ ${LOTTO.maxLottoNum} 사이의 값으로 입력해주세요.`,
});

export default ERROR;
