import SetGame from "./settings/Settings.js";
import OutputView from "./view/OutputView.js";
import Issue from "./utils/Issue.js";
import Compare from "./utils/Compare.js";
import { Console } from "@woowacourse/mission-utils";

class App {

  #output
  #issue

  #setGame
  #amounts
  #lotto
  #bonus
  #numberOfLotto
  #lottos
  #result
  #prizes

  constructor(){
    this.#setGame = new SetGame();
    this.#output = new OutputView();
    this.#issue = new Issue();
  }

  async play() {
    await this.setGame();
    this.#numberOfLotto = await this.#setGame.setNumOfLotto(this.#amounts);
    await this.#issueLottos(this.#numberOfLotto);

    this.result();
  }

  async setGame(){
    this.#amounts = await this.#setGame.setAmounts();
    this.#lotto = await this.#setGame.setLottoNumbers();
    this.#bonus = await this.#setGame.setBonusNumber(this.#lotto);
  }

  async #issueLottos(number){
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

  async result(){
    const compare = new Compare(this.#lotto, this.#bonus);
    this.#result = await compare.compareLotto(this.#lottos);
    
  }
  

}

export default App;
