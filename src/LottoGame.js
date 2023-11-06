import Lotto from "./Lotto.js";

const PRIZE_MONEY = {
  "3개 일치 (5,000원)": 5000,
  "4개 일치 (50,000원)": 50000,
  "5개 일치 (1,500,000원)": 1500000,
  "5개 일치, 보너스 볼 일치 (30,000,000원)": 30000000,
  "6개 일치 (2,000,000,000원)": 2000000000,
};

class LottoGame {
  constructor(myLotto, winningLotto) {
    this.lottos = myLotto.map((numbers) => new Lotto(numbers));
    this.winningLotto = winningLotto;
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

  start() {
    this.lottos.forEach((lotto) => {
      lotto.checkResult(this.winningLotto);
      this.results[lotto.result] += 1;
    });
  }

  generateStatistics() {
    this.statistics = "";
    Object.entries(this.results).forEach(([key, value]) => {
      if (key !== "None") {
        this.statistics += `\n${key} - ${value}개`;
        this.reward += PRIZE_MONEY[key] * value;
      }
    });
  }
}

export default LottoGame;
