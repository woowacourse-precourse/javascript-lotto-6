import { PURCHASE_ERROR_CODE } from '../error/errorCode.js';

export function checkHasDuplicate(numbers) {
  const LottoSet = new Set(numbers);

  const isNotValid = LottoSet.size !== numbers.length;

  if (isNotValid) {
    throw new Error(`${PURCHASE_ERROR_CODE.isDuplicated}`);
  }
}

export function checkLottoDuplicate(createdLotto, lottoList) {
  let isDuplicated = false;

  lottoList.forEach((element) => {
    const elementSet = new Set([...element, ...createdLotto]);
    if (elementSet.size === 6) {
      isDuplicated = true;
    }
  });

  return isDuplicated;
}
