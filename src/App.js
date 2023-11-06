import Lotto from './model/Lotto.js';
import Compare from './model/Compare.js';
import InputView from './view/inputView.js';
import OutputView from './view/outputView.js';

class App {
  #inputView;
  #outputView;
  #compare;

  #coin = 0;
  #boughtLottos = [];
  #winningNumber;
  #bonusNumber = 0;

  async play() {
    this.#initialize();
    await this.buyLotto(this.#inputView, this.#outputView);
    await this.getWinningNumber(this.#inputView);
    this.getWinningResult();
  }

  #initialize() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  // console.log('로또 구매하는 로직');
  async buyLotto(inputView) {
    this.#coin = await inputView.coin();
    console.log(`\n${this.#coin}개를 구매했습니다.`);

    for (let i = 0; i < this.#coin; i++) {
      this.#boughtLottos.push(Lotto.random());
      console.log(this.#boughtLottos[i].getNumbers());
    }
  }

  // console.log('당첨번호 입력로직');
  async getWinningNumber(inputView) {
    this.#winningNumber = new Lotto(await inputView.winningNumber());
    this.#bonusNumber = await inputView.bonus(this.#winningNumber.getNumbers());
  }

  // console.log('당첨결과 출력');
  getWinningResult() {
    this.#compare = new Compare(this.#winningNumber, this.#bonusNumber);
    const result = this.#compare.getMatchedAllNumber(this.#boughtLottos);
    console.log('\n당첨 통계\n---\n');
    console.log(result);
  }

  printWinningResult() {}
}

export default App;
