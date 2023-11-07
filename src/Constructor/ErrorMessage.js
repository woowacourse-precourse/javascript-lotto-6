import SETTING from "./Setting.js";

const ERROR_PREFIX = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  LOTTO: Object.freeze({
    NUMBERS_COUNT_MISMATCH: `${ERROR_PREFIX} 로또 번호는 ${SETTING.LOTTO_NUMBER_COUNT}개여야 합니다.`,
    NUMBERS_NOT_ALL_NUMBERS: (numbers) =>
      `${ERROR_PREFIX} 로또 번호에 숫자가 아닌 문자가 포함되어 있습니다. : ${numbers}`,
    NUMBERS_DUPLICATED: (numbers) =>
      `${ERROR_PREFIX} 로또 번호에 중복된 번호가 포함되어 있습니다. : ${numbers}`,
    NUMBERS_OUT_OF_RANGE: (numbers) =>
      `${ERROR_PREFIX} 로또 번호에 유효하지 않은 범위의 숫자가 포함되어 있습니다. : ${numbers}`,
  }),
  MONEY: Object.freeze({
    NUMBERS_NOT_ALL_NUMBERS: (numbers) =>
      `${ERROR_PREFIX} 투입한 돈이 정상적이지 않습니다. : ${numbers}`,
    UNIT: `${ERROR_PREFIX} 돈의 금액은 ${SETTING.LOTTO_PRICE.toLocaleString()} 단위로 투입해야 합니다.`,
  }),
  WINNING_NUMBERS: Object.freeze({
    NUMBERS_COUNT_MISMATCH: `${ERROR_PREFIX} 당첨 번호는 ${SETTING.LOTTO_NUMBER_COUNT}개여야 합니다.`,
    BONUS_NUMBER_NOT_NUMBER: `${ERROR_PREFIX} 보너스 추첨 번호가 숫자가 아닙니다.`,
    NUMBERS_NOT_ALL_NUMBERS: (numbers) =>
      `${ERROR_PREFIX} 당첨 번호가 올바르지 않습니다. : ${numbers}`,
    NUMBERS_OUT_OF_RANGE: (numbers) =>
      `${ERROR_PREFIX} 당첨 번호에 유효하지 않은 범위의 숫자가 포함되어 있습니다. : ${numbers}`,
    NUMBERS_DUPLICATED: (numbers) =>
      `${ERROR_PREFIX} 당첨 번호에 중복된 번호가 포함되어 있습니다. : ${numbers}`,
  }),
});

export default ERROR_MESSAGE;
