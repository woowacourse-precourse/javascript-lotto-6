import { MESSAGE_ERROR } from '../constants/Error.js';
import { COMMA, LOTTO_NUMBER_RANGE, LOTTO_NUMBER_SIZE } from '../constants/GameSetting.js';

const isNumberOrComma = (input) => {
  const regExp = /^[0-9]+(,[0-9]+)*$/;
  if (!regExp.test(input)) {
    throw new Error(MESSAGE_ERROR.lottoNotInput);
  }
};

const isLottoRange = (inputArray) => {
  inputArray.forEach((number) => {
    if (number < LOTTO_NUMBER_RANGE.start || number > LOTTO_NUMBER_RANGE.end) {
      throw new Error(MESSAGE_ERROR.lottoNumberRange);
    }
  });
};

const isLottoDuplicate = (inputArray) => {
  const set = new Set(inputArray);
  if (set.size !== inputArray.length) {
    throw new Error(MESSAGE_ERROR.lottoDuplicateNumber);
  }
};

const isLottoSize = (inputArray) => {
  if (inputArray.length !== LOTTO_NUMBER_SIZE) {
    throw new Error(MESSAGE_ERROR.lottoNumberSize);
  }
};

export function isValidWinningLotto(input) {
  const inputArray = input.split(COMMA);

  isNumberOrComma(input);
  isLottoRange(inputArray);
  isLottoDuplicate(inputArray);
  isLottoSize(inputArray);
}
