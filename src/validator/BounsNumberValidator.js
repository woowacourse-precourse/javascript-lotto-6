import { MESSAGE_ERROR } from '../constants/Error.js';
import { LOTTO_NUMBER_RANGE } from '../constants/GameSetting.js';

const isNumber = (input) => {
  const regExp = /^[0-9]+$/;
  if (!regExp.test(input)) {
    throw new Error(MESSAGE_ERROR.isNotNumber);
  }
};

export function isValidBounsNumber(input, winningLottoNumbers) {
  if (winningLottoNumbers.includes(Number(input))) {
    throw new Error(MESSAGE_ERROR.bounsNumber);
  }
  if (input < LOTTO_NUMBER_RANGE.start || input > LOTTO_NUMBER_RANGE.end) {
    throw new Error(MESSAGE_ERROR.bounsOnlyNumber);
  }
  isNumber(input);
}
