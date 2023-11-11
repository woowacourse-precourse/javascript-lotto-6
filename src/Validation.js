import { ErrorMessage } from "./constants/Message";

export const checkMoney = (money) => {
  if (!typeof money === "string" || isNaN(money))
    throw new Error(ErrorMessage.WRONGTYPE);
  if (Number(money) <= 0) throw new Error(ErrorMessage.WRONGMONEY);
  if (Number(money) % 1000 !== 0) throw new Error(ErrorMessage.WRONGWON);
};

export const checkLottoNumbers = (lottoNumbers) => {
  const lottoNumbersArray = lottoNumbers.split(",");
  if (new Set(lottoNumbersArray).size !== lottoNumbersArray.length)
    throw newError(ErrorMessage.ISDUPLICATE);

  if (lottoNumbersArray.length !== 6) throw new Error(ErrorMessage.WRONGSIX);

  for (let lottoNumber of lottoNumbersArray) {
    if (isNaN(Number(lottoNumber))) throw new Error(ErrorMessage.WRONGTYPE);
    if (0 > Number(lottoNumber) || 45 < Number(lottoNumber))
      throw new Error(ErrorMessage.WRONGRANGE);
  }
};

export const checkBonusNumber = (bonusNumber, userLottos) => {
  if (userLottos.includes(bonusNumber))
    throw new Error(ErrorMessage.ISDUPLICATE);

  if (bonusNumber.length !== 1) throw new Error(ErrorMessage.WRONGBONUS);

  if (isNaN(Number(bonusNumber))) throw new Error(ErrorMessage.WRONGTYPE);

  if (0 > Number(bonusNumber) || 45 < Number(bonusNumber))
    throw newError(ErrorMessage.WRONGRANGE);
};
