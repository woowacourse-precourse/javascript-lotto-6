const ERROR = Object.freeze({
  minimumOneThousand: '[ERROR] 최소 1000원 이상 입력해주세요',
  divisibleByOneThousand: '[ERROR] 1000원으로 나누어떨어지는 구매금액을 입력해주세요',
  sixDigits: '[ERROR] 숫자는 6자리를 입력해주세요',
  duplicated: '[ERROR] 중복된 숫자가 있습니다. 다시 입력해주세요',
  withinRange: '[ERROR] 숫자는 1에서 45 이내여야합니다',
  naturalNumber: '[ERROR] 보너스 번호는 자연수여야합니다',
  validateRandom: '[ERROR] 로또 번호 중 중복된 숫자가 있습니다',
});

export default ERROR;
