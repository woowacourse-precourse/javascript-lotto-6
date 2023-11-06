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
    };
    this.statistics = "당첨 통계\n---\n";
  }

  start() {
    this.lottos.forEach((lotto) => {
      lotto.checkResult(this.winningLotto);
      this.results[lotto.result] += 1;
    });
  }

  generateStatistics() {
    Object.entries(this.results).forEach(([key, value]) => {
      this.statistics += `${key} - ${value}개\n`;
    });
  }
}

export default LottoGame;
