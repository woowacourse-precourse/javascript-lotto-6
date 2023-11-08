export const typeofNumber = (purchaseAmout) => {
  const regExp = /^[0-9]+$/g;
  if (!regExp.test(purchaseAmout)) {
    throw new Error('[ERROR] 숫자 타입이 아닙니다.');
  }
}

export const amountUnit = (purchaseAmout) => {
  if (purchaseAmout % 1000 !== 0)
  throw new Error('[ERROR] 1000원 단위가 아닙니다.')
    
}