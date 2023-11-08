import NUMBER from './number';

const inputView = Object.freeze({
  emptyInput: '빈 값을 입력할 수 없습니다.',
  notNumber: '숫자만 입력할 수 있습니다.',
  negativeValue: '음수를 입력할 수 없습니다.',
  notInteger: '정수만 입력할 수 있습니다.',
});

const moneyAmount = Object.freeze({
  notDivisibleByUnitAmount: `금액은 ${NUMBER.game.money.unitAmount}원 단위로 입력해야 합니다.`,
});

const lottoNumber = Object.freeze({
  notInRange: `로또 번호는 ${NUMBER.game.lotto.minNumber} ~ ${NUMBER.game.lotto.maxNumber} 범위 이내의 숫자만 입력할 수 있습니다.`,
  invalidLength: `로또 번호는 ${NUMBER.game.lotto.length}개의 숫자여야 합니다.`,
  isDuplicated: '로또 번호는 중복된 값을 입력할 수 없습니다.',
});

const bonusNumber = Object.freeze({
  notInRange: `보너스 번호는 ${NUMBER.game.bonus.minNumber} ~ ${NUMBER.game.bonus.maxNumber} 범위 이내의 숫자만 입력 가능합니다.`,
  isDuplicatedWithLottoNumbers:
    '보너스 번호는 설정된 로또 번호와 중복될 수 없습니다.',
});

const ERROR = Object.freeze({
  inputView,
  moneyAmount,
  lottoNumber,
  bonusNumber,
});

export default ERROR;
