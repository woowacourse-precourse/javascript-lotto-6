class Validator {
  isValidPurchaseAmount(number) {
    console.log('input seed', number, typeof number, number % 1000);
    if (number % 1000 !== 0 && number !== 0) throw new Error('[ERROR]: 올바르지 않은 구매 요청 금액입니다.');
    return true;
  }
}

export default Validator;
