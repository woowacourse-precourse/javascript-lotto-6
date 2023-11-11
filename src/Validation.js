import { ErrorMessage } from "./constants/Message";

export const checkMoney = (money) => {
  if (isNaN(Number(money))) throw newError(ErrorMessage.WRONGTYPE);
  if (money % 1000 !== 0) throw newError(ErrorMessage.WRONGWON);
};

export const checkLottoNumbers = (lottoNumbers) => {
  const lottoNumbersArray = lottoNumbers.split(",");
  if (new Set(lottoNumbersArray).size !== lottoNumbersArray.length)
    throw newError(ErrorMessage.ISDUPLICATE);
  for (let lottoNumber of lottoNumbersArray) {
    if (isNaN(Number(lottoNumber))) throw newError(ErrorMessage.WRONGTYPE);
    if (0 > Number(lottoNumber) || 45 < Number(lottoNumber))
      throw newError(ErrorMessage.WRONGRANGE);
  }
};
export const checkBonusNumber = (bonusNumber) => {
  if (bonusNumber.length !== 1) throw newError(ErrorMessage.WRONGBONUS);
  if (isNaN(Number(bonusNumber))) throw newError(ErrorMessage.WRONGTYPE);
  if (0 > Number(bonusNumber) || 45 < Number(bonusNumber))
    throw newError(ErrorMessage.WRONGRANGE);
};
