import { INITIAL_RESULT } from "../constants/Constant";

export default class LottoResultCalculator {
  constructor(lottos) {
    this.lottos = lottos;
    this.result = { ...INITIAL_RESULT };
  }

  getResult(winningNumbers, bonusNumber) {
    this.lottos.forEach((lotto) => {
      lotto.calculateResult(winningNumbers, bonusNumber);
      const rank = lotto.judgeResult();
      if (rank > 0) this.result[rank] += 1;
    });
    return this.result;
  }
}
