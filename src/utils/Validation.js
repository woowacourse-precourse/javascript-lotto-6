import { LOTTO_NUMBER_RANGE, LOTTO_PRICE } from '../constants/GameSetting.js';
import { MESSAGE_ERROR } from '../constants/Message.js';

const isNumber = (input) => {
  const regExp = /^[0-9]+$/;
  if (!regExp.test(input)) {
    throw new Error(MESSAGE_ERROR.isNotNumber);
  }
};

const isDividedByThousand = (input) => {
  if (input % LOTTO_PRICE !== 0) {
    throw new Error(MESSAGE_ERROR.isNotDividedByThousand);
  }
};

export function isValidBuyAmount(input) {
  isNumber(input);
  isDividedByThousand(input);
}

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

export function isValidWinningLotto(input) {
  const inputArray = input.split(',');

  isNumberOrComma(input);
  isLottoRange(inputArray);
  isLottoDuplicate(inputArray);
}
