import SetGame from "./settings/Settings.js";
import OutputView from "./view/OutputView.js";
import Issue from "./utils/Issue.js";
import Compare from "./utils/Compare.js";
import stats from "./utils/stats.js";
import Stats from "./utils/stats.js";
import MESSAGE from "./constants/message.js";

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
  #earnings

  constructor(){
    this.#setGame = new SetGame();
    this.#output = new OutputView();
    this.#issue = new Issue();
  }

  async play() {
    await this.setGame();
    this.#numberOfLotto = await this.#setGame.setNumOfLotto(this.#amounts);
    this.#output.printPurchase(this.#numberOfLotto);
    await this.#issueLottos(this.#numberOfLotto);
    
    await this.result();
  }

  async setGame(){
    this.#amounts = await this.#setGame.setAmounts();
    this.#lotto = await this.#setGame.setLottoNumbers();
    this.#bonus = await this.#setGame.setBonusNumber(this.#lotto);
  }

  async #issueLottos(number){
    

    const lottos = []
    let counter = 0

    while(counter < number){
      const lotto = this.#issue.issueLotto();
      this.#output.print(`[${lotto.join(', ')}]`)
      lottos.push(lotto)

      counter++
    }

    this.#lottos = lottos
  }

  async result(){
    const compare = new Compare(this.#lotto, this.#bonus);
    this.#result = await compare.compareLotto(this.#lottos);
    
    await this.printStats();
  }

  async printStats(){
    const stats = new Stats(this.#result);
    const results = stats.getStats();

    await this.#printResult(results);

    this.#earnings = (stats.profits() / this.#amounts) * 100 ;
    this.#output.printEarnings(this.#earnings)
  }  

  async #printResult(results){
    this.#output.print(MESSAGE.result.stats)
    
    for(const result in results){
      this.#output.print(results[result])
    }
  }

}

export default App;
