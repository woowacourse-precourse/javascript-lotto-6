const inputError = Object.freeze({
  emptyString: '입력값이 없습니다.',
  amount: '로또를 1개 이상 구매할 수 있는 금액을 입력해야 합니다.',
  remainder: '로또를 구입한 금액이 남으면 안됩니다.',
  type: '숫자를 입력해야 합니다.',
  scope: '1 이상의 정수를 입력해야 합니다.',
});

const lottoError = Object.freeze({
  emptyString: '입력값이 없습니다.',
  maxCount: '로또 번호는 {0}개이어야 합니다.',
  scope: '로또 번호는 {0}에서 {1} 사이여야 합니다.',
  duplicate: '로또 번호는 모두 중복되어선 안됩니다.',
  bonusDuplicate: '보너스 번호: 이미 당첨 번호에 포함되어 있습니다.',
});

const ERROR_MESSAGE = Object.freeze({
  inputError,
  lottoError,
});

export default ERROR_MESSAGE;
