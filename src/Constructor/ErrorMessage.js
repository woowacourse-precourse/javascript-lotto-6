import { LOTTO_NUMBER_COUNT } from "./Setting";

const ERROR_PREFIX = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  LOTTO: Object.freeze({
    NUMBERS_COUNT_MISMATCH: `${ERROR_PREFIX} 로또 번호는 ${LOTTO_NUMBER_COUNT}개여야 합니다.`,
    NUMBERS_NOT_ALL_NUMBERS: (numbers) =>
      `${ERROR_PREFIX} 로또 번호에 숫자가 아닌 문자가 포함되어 있습니다. : {${numbers}}`,
    NUMBERS_DUPLICATED: (numbers) =>
      `${ERROR_PREFIX} 로또 번호에 중복된 번호가 포함되어 있습니다. : {${numbers}}`,
    NUMBERS_OUT_OF_RANGE: (numbers) =>
      `${ERROR_PREFIX} 로또 번호에 유효하지 않은 범위의 숫자가 포함되어 있습니다. : {${numbers}}`,
  }),
});

export default ERROR_MESSAGE;
