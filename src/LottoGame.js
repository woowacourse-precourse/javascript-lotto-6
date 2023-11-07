import Lotto from "./Lotto.js";
import LottoConstants from "./Constants/LottoConstants.js";

class LottoGame {
  constructor(myLotto) {
    this.lottos = myLotto.map((numbers) => new Lotto(numbers));

    this.results = {
      "3개 일치 (5,000원)": 0,
      "4개 일치 (50,000원)": 0,
      "5개 일치 (1,500,000원)": 0,
      "5개 일치, 보너스 볼 일치 (30,000,000원)": 0,
      "6개 일치 (2,000,000,000원)": 0,
      None: 0,
    };
    this.reward = 0;
  }

  start(winningLotto) {
    this.lottos.forEach((lotto) => {
      lotto.checkResult(winningLotto);
      this.results[lotto.result] += 1;
    });
  }

  generateStatistics() {
    this.statistics = "";
    Object.entries(this.results).forEach(([key, value]) => {
      if (key !== LottoConstants.NONE) {
        this.statistics += `\n${key} - ${value}개`;
        this.reward += LottoConstants.PRIZE_MONEY[key] * value;
      }
    });
  }
}

export default LottoGame;
