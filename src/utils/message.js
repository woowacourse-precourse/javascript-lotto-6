import { LOTTO } from "../constants/lotto.js";

const ErrorMessage = {
  basic: (msg) => `[ERROR] ${msg}`,
  incorrectFormat: () => `숫자가 잘못된 형식입니다.`,
  incorrectLottoCount: () => `로또 번호는 ${LOTTO.MAX_COUNT}개여야 합니다.`,
  incorrectLottoNumber: () =>
    `로또 번호는 ${LOTTO.MIN_NUMBER}이상 ${LOTTO.MAX_NUMBER}이하의 숫자여야 합니다.`,
  duplicateNumbers: () => `중복된 숫자가 포함되어 있습니다.`,
};

export { ErrorMessage };
