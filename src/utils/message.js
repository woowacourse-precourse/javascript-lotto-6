const GAME_MESSAGES = {
  purchaseAmount: "구입금액을 입력해 주세요.",
  lottoTicketCount: "개를 구매했습니다.",
  winningNumbers: "당첨 번호를 입력해 주세요.",
  bounsNumber: "보너스 번호를 입력해 주세요.",
};

const ERROR_MESSAGES = {
  purchaseAmountNotNumber: "[ERROR] 로또 구입 금액은 숫자여야 합니다.",
  purchaseAmountNotDivisible: "[ERROR] 로또 구입 금액은 1,000원으로 나누어 떨어져야 합니다.",
  lottoNumberCountSix: "[ERROR] 로또 번호는 6개여야 합니다.",
  duplicateLottoNumbers: "[ERROR] 로또 번호는 중복되지 않은 수여야 합니다.",
  lottoNumberNotNumber: "[ERROR] 로또 번호는 숫자여야 합니다.",
  lottoNumberOutOfRange: "[ERROR] 로또 번호는 1부터 45까지의 수여야 합니다.",
  bonusNumberCountOne: "[ERROR] 보너스 번호는 1개여야 합니다.",
  bonusNumberNotNumber: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  bonusNumberOutOfRange: "[ERROR] 보너스 번호는 1부터 45까지의 수여야 합니다.",
  bonusNumberAlreadyIncluded: "[ERROR] 보너스 번호가 이미 당첨 번호에 포함되어 있습니다.",
};

export { GAME_MESSAGES, ERROR_MESSAGES };
