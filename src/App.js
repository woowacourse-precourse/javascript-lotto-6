import SetGame from "./domains/Settings.js";
import OutputView from "./view/OutputView.js";
import Issue from "./domains/Issue.js";

class App {

  #output
  #issue

  #setGame
  #amounts
  #lotto
  #bonus
  #numberOfLotto
  #lottos

  constructor(){
    this.#setGame = new SetGame();
    this.#output = new OutputView();
    this.#issue = new Issue();
  }

  async play() {
    await this.setGame();
    this.#numberOfLotto = await this.#setGame.setNumOfLotto(this.#amounts)
    this.#issueLottos(this.#numberOfLotto);
  }

  async setGame(){
    this.#amounts = await this.#setGame.setAmounts();
    this.#lotto = await this.#setGame.setLottoNumbers();
    this.#bonus = await this.#setGame.setBonusNumber(this.#lotto);
  }

  #issueLottos(number){
    this.#output.printPurchase(number);

    const lottos = []
    let counter = 0

    while(counter < number){
      const lotto = this.#issue.issueLotto();
      this.#output.print(lotto)
      lottos.push(lotto)

      counter++
    }

    this.#lottos = lottos
  }

  

}

export default App;
