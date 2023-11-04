class LottoCalculator {
  #lottoes;

  /**
   * 계산할 로또 클래스 입력
   * @param {Lotto[]} lottoes
   */
  setLottoes(lottoes) {
    this.#lottoes = lottoes;
  }
}

export default LottoCalculator;
