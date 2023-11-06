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
      "3개 일치": 0,
      "4개 일치": 0,
      "5개 일치": 0,
      "5개 일치, 보너스 볼 일치": 0,
      "6개 일치": 0,
    };
    this.statistics = "";
  }

  start() {
    this.lottos.forEach((lotto) => {
      lotto.checkResult(this.winningLotto);
      this.results[lotto.result] += 1;
    });
  }

  generateStatistics() {
    // Todo results 객체를 foreach하여 statistics 변수에 가공한 당첨 통계 출력 문자 저장
  }
}

export default LottoGame;
