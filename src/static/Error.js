const ERROR = Object.freeze({
  purchaseNumber: "[ERROR] 구입 금액은 숫자만 입력 가능합니다.",
  purchaseUnit: "[ERROR] 구입 금액은 1,000원 단위로 나눠 떨어져야 합니다.",
  purchaseZero: "[ERROR] 구입 금액은 0원이 될 수 없습니다.",
  purchaseMinus: "[ERROR] 구입 금액은 음수가 될 수 없습니다.",

  lottoNumber: "[ERROR] 로또 번호는 숫자로만 구성되어야 합니다.",
  lottoCount: "[ERROR] 로또 번호는 6개로 구성되어야 합니다.",
  lottoDuplicate: "[ERROR] 로또 번호는 서로 중복될 수 없습니다.",
  lottoRange: "[ERROR] 로또 번호는 1과 45 사이의 값이어야 합니다",

  winningNumber: "[ERROR] 당첨 번호는 숫자만 입력 가능합니다.",
  winningCount: "[ERROR] 당첨 번호는 6개로 구성되어야 합니다.",
  winningDuplicate: "[ERROR] 당첨 번호는 서로 중복될 수 없습니다.",
  winningRange: "[ERROR] 당첨 번호는 1과 45 사이의 값이어야 합니다.",

  bonusNumber: "[ERROR] 보너스 번호는 숫자만 입력 가능합니다.",
  bonusCount: "[ERROR] 보너스 번호는 1개여야 합니다.",
  bonusDuplicate: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  bonusRange: "[ERROR] 보너스 번호는 1과 45 사이의 값이어야 합니다.",
});

export default ERROR;
