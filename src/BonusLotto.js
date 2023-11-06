class BonusLotto {
  #number

  constructor(number, lotto) {
    this.#validation(number, lotto);
    this.#number = number;
  }

  #validation(number, lotto) {
    if (number.length === 0) {
      throw new Error("[ERROR] 입력을 받지 않았습니다.");
    } else if (isNaN(number)) {
      throw new Error("[ERROR] 숫자 안에 문자가 있습니다.");
    } else if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
    } else if (lotto.includes(number)) {
      throw new Error("[ERROR] 당첨 번호에 포함된 번호를 뽑을 수 없습니다.");
    };
  }

  getLottoMatchBonusCount(lottoNumbersList) {
    const lottoMathBonusCountList = [];
    lottoNumbersList.forEach(lotttoNumbers => {
      lottoMathBonusCountList.push(lotttoNumbers.includes(Number(this.#number)));
    });
    return lottoMathBonusCountList;
  }
}

export default BonusLotto;