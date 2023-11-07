import { BONUS_ERROR_CODE } from '../error/errorCode.js';

export default function checkIsInWinningNumber(verifyNumber, lotto) {
  const isInWinningNumber = lotto.find((element) => element === verifyNumber);

  if (isInWinningNumber) {
    throw new Error(`${BONUS_ERROR_CODE.valueMatchesLotto}`);
  }
}
