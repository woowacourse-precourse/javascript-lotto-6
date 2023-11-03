export const purchaseAmountValidation = purchaseAmout => {
Object.values(purchaseAmountValidation.validation).forEach(({ errorMessage, isInvalid }) => {
    if(isInvalid(purchaseAmout)) throw new Error (errorMessage);
  },
  );
};

purchaseAmountValidation.validation = Object.freeze({
  typeofNumber: Object.freeze({
  errorMessage: '숫자 타입이 아닙니다.',
  isInvalid(purchaseAmout) {
    const regExp = /^[0-9]+$/g;
    return !regExp.test(purchaseAmout)
    },
  }),
  amountUnit: Object.freeze({
  errorMessage: '1000원 단위가 아닙니다.',
  isInvalid(purchaseAmout) {
    if (purchaseAmout % 1000 !== 0)
    return true;
    }
  })
})

export default purchaseAmountValidation