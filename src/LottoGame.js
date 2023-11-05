import Lotto from "./Lotto.js";

class LottoGame {
  /*
    myLotto == [[로또 번호 6개], [로또 번호 6개] , ~구입 개수]
    winningLotto == {win : [당첨 번호 6개], bonus : 당첨번호}
  */
  constructor(myLotto, winningLotto) {
    this.lottos = myLotto.map((numbers) => new Lotto(numbers));
    this.winningLotto = winningLotto;
    this.statistics = [];
  }

  start() {
    this.lottos.forEach((lotto) => {
      lotto.checkResult(this.winningLotto);
      this.statistics.push(lotto.result);
    });
  }
}

export default LottoGame;
