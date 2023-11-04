const Validation = {
  currencyAmount(price) {
    if (Number(price) % 1000 !== 0) {
      throw new Error('로또 금액은 1,000원 단위로 입력해주세요');
    }
  },

  numberType(price) {
    if (!/^[0-9]+$/.test(price)) {
      throw new Error('로또 금액은 1,000원 이상의 숫자 형태로 입력해주세요');
    }
  },

  limitPrice(price) {
    if (Number(price) > 2000000000) {
      throw new Error('로또 금액이 너무 큽니다.');
    }
  },

  minimumPrice(price) {
    if (Number(price) < 1000) {
      throw new Error('로또 금액은 1,000원 이상부터 구매가 가능합니다.');
    }
  },

  winningNumberLength(splitedWinnigNumbers) {
    if (splitedWinnigNumbers.length !== 6) {
      throw new Error('당첨 번호는 쉼표(,)를 기준으로 6자리를 입력해주세요');
    }
  },

  inputLottoPrice(price) {
    Validation.currencyAmount(price);
    Validation.numberType(price);
    Validation.limitPrice(price);
    Validation.minimumPrice(price);
  },

  inputWinningNumbers(winnigNumbers) {
    const splitedWinnigNumbers = winnigNumbers.split(',');
    Validation.winningNumberLength(splitedWinnigNumbers);
  },
};

export default Validation;
