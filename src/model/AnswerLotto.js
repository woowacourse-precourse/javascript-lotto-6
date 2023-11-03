class AnswerLotto {
  #numbers;
  #bonusNumber;
  constructor(lottoNumber, bonusNumber) {
    this.#numbers = lottoNumber;
    this.#bonusNumber = bonusNumber;
  }
  getLottoNumber() {
    return this.#numbers;
  }
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default AnswerLotto;
