const ERROR = Object.freeze({
  purchaseNumber: '[ERROR] 구입 금액은 숫자만 입력 가능합니다.',
  purchaseZero: '[ERROR] 구입은 1000원부터 입력 가능합니다.',
  purchaseUnit: '[ERROR] 구입 금액은 천원 단위로 입력 가능합니다.',
  purchaseMinus: '[ERROR] 구입 금액은 음수가 아닙니다.',

  lottoNumber: '[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.',
  lottoLength: '[ERROR] 로또 번호는 6개로 이루어져야 합니다.',
  lottoDuplicate: '[ERROR] 로또 번호 서로 중복되면 안됩니다.',
  lottoRange: '[ERROR] 로또 번호는 1과 45 사이의 값이어야 합니다.',

  winningNumber: '[ERROR] 당첨 번호는 숫자로만 이루어져야 합니다.',
  winningNumberLength: '[ERROR] 당첨 번호는 6개로 이루어져야 합니다.',
  winningDuplicate: '[ERROR] 당첨 번호는 서로 중복되면 안됩니다.',
  winningRange: '[ERROR] 당첨 번호는 1과 45 사이의 값이어야 합니다.',

  bonusNumber: '[ERROR] 보너스 번호는 숫자만 입력 가능합니다.',
  bonusNumberRange: '[ERROR] 보너스 번호는 1과 45 사이의 값이어야 합니다.',
  bonusNumberDuplicate: '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.',
});

export default ERROR;
