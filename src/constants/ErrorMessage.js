const ERROR_MESSAGES = Object.freeze({
  IS_NUMBER: "[ERROR] 금액은 숫자여야 합니다.",
  IS_ONE_THOUSAND_WON: "[ERROR] 금액은 1000원 단위여야 합니다.",
  IS_ZERO: "[ERROR] 금액은 0원 이상 이어야합니다.",
  IS_LOTTO_NUMBER: "[ERROR] 로또 번호는 숫자여야 합니다.",
  IS_LOTTO_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  IS_LOTTO_RANGE: "[ERROR] 로또의 범위는 1~45까지 입니다.",
  IS_DUPLICATION: "[ERROR] 로또의 숫자가 중복됩니다.",
  IS_BONUS_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  IS_BONUS_RANGE: "[ERROR] 보너스 번호의 범위는 1~45까지 입니다.",
  IS_BONUS_COUNT: "[ERROR] 보너스 번호는 1개여야 합니다.",
  IS_BONUS_DUPLICATION: "[ERROR] 보너스의 숫자가 당첨 번호와 중복됩니다.",
});

export default ERROR_MESSAGES;
