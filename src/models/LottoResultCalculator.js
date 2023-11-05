export default class LottoResultCalculator {
  constructor(lottos) {
    this.lottos = lottos;
    this.result = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };
  }

  getResult(winningNumbers, bonusNumber) {
    for (let lotto of this.lottos) {
      lotto.calculateResult(winningNumbers, bonusNumber);
      const rank = lotto.judgeResult();
      if (rank > 0) this.result[rank] += 1;
    }
    return this.result;
  }
}