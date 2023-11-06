import Lotto from "./Lotto.js";

class LottoGame {
  /*
    myLotto == [[로또 번호 6개], [로또 번호 6개] , ~구입 개수]
    winningLotto == {win : [당첨 번호 6개], bonus : 당첨번호}
  */
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
    this.statistics = "\n당첨 통계\n---";
    this.reward = 0;
  }

  start() {
    this.lottos.forEach((lotto) => {
      lotto.checkResult(this.winningLotto);
      this.results[lotto.result] += 1;
    });
  }

  generateStatistics() {
    Object.entries(this.results).forEach(([key, value]) => {
      if (key !== "None") this.statistics += `\n${key} - ${value}개`;

      if (key === "3개 일치 (5,000원)") this.reward += 5000 * value;
      if (key === "4개 일치 (50,000원)") this.reward += 50000 * value;
      if (key === "5개 일치 (1,500,000원)") this.reward += 1500000 * value;
      if (key === "5개 일치, 보너스 볼 일치 (30,000,000원)")
        this.reward += 30000000 * value;
      if (key === "6개 일치 (2,000,000,000원)")
        this.reward += 200000000 * value;
    });
  }
}

export default LottoGame;
