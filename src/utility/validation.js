import { ERROR_MSG, LOTTO_RULES } from "../constants/constants.js";

export const validateLottoPrice = (price) => {
  if (
    Number(price) % LOTTO_RULES.PRICE !== 0 ||
    Number(price) < 1000 ||
    Number(price) === ""
  ) {
    throw new Error(ERROR_MSG.PRICE);
  }
};
// 로또 당첨번호 숫자인지, 1~45 범위, 중복 숫자 검사 함수
export const validateLottoResult = (number, numbers) => {
  if (isNaN(number)) {
    throw new Error(ERROR_MSG.NUMBER_ERROR);
  }

  if (number < 1 || number > 45) {
    throw new Error(ERROR_MSG.NUMBER_RANGE);
  }
  if (numbers.filter((n) => n === number).length > 1) {
    throw new Error(ERROR_MSG.EXISTING_NUM);
  }
};

export const validateBonusNum = (number, lottoResult) => {
  if (number < 1 || number > 45 || number === "") {
    throw new Error(ERROR_MSG.NUMBER_RANGE);
  }

  if (lottoResult.includes(number)) {
    throw new Error(ERROR_MSG.EXISTING_NUM);
  }
};
