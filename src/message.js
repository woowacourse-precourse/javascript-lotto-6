export const OUTPUT_MESSAGE = Object.freeze({
  buyLottoCount: (count) => `${count}개를 구매했습니다.`,
  lottoNumbers: (numbers) => `[${numbers.join(", ")}]`,
  newLine: "",
  lottoResultInfo: "당첨 통계\n---",
  lottoResults: (message, money, count) =>
    `${message} (${money}원) - ${count}개`,
  lottoReturns: (profitPercentage) => `총 수익률은 ${profitPercentage}%입니다.`,
});

export const INPUT_MESSAGE = Object.freeze({
  enterPurchaseAmount: "구입금액을 입력해 주세요.\n",
  enterWinningNumbers: "당첨 번호를 입력해 주세요.\n",
  enterBonusNumber: "보너스 번호를 입력해 주세요\n",
});

const ERROR_TYPE = "[ERROR]";

export const ERROR_MESSAGE = Object.freeze({
  moneyIsNull: `${ERROR_TYPE} 금액을 입력해 주세요`,
  lottoNumberIsNull: `${ERROR_TYPE} 숫자를 입력해 주세요`,
  invalidMoneyUnit: (unit) =>
    `${ERROR_TYPE} 금액은 ${unit}원 단위로 입력해 주세요`,
  invalidLottoNumberLength: (length) =>
    `${ERROR_TYPE} 로또 번호는 ${length}개여야 합니다.`,
  duplicateLottoNumbers: `${ERROR_TYPE} 로또 번호는 중복되지 않아야 합니다.`,
  invalidTargetLottoNumberLength: (length) =>
    `${ERROR_TYPE} 당첨 로또 번호는 ${length}개여야 합니다.`,
  duplicateTargetLottoNumbers: `${ERROR_TYPE} 당첨 로또 번호는 중복되지 않아야 합니다.`,
  invalidBonusNumber: `${ERROR_TYPE} 보너스 번호는 당첨 번호에 포함될 수 없습니다.`,
  invalidNumberRange: (min, max) =>
    `${ERROR_TYPE} ${min}~${max} 사이의 숫자를 입력해 주세요`,
  notIntegerLottoNumber: `${ERROR_TYPE} 로또의 각 번호는 정수여야 합니다.`,
  notIntegerTargetLottoNumber: `${ERROR_TYPE} 당첨 로또는 정수로 구성되어야 합니다.`,
  targetLottoNumberRange: (min, max) =>
    `${ERROR_TYPE} 당첨 로또는 ${min}~${max} 사이의 숫자로 구성되어야 합니다.`,
  lottoNumberRange: (min, max) =>
    `${ERROR_TYPE} 로또는 ${min}~${max} 사이의 숫자로 구성되어야 합니다.`,
});
