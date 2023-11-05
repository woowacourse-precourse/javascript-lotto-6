import Lotto from './settings/Lotto.js'
import Amounts from './settings/Amounts.js'
import InputView from './view/InputView.js'
import { Console } from '@woowacourse/mission-utils'

class App {

  #amounts
  #Lotto
  #inputView

  constructor(){
    this.#inputView = new InputView();
    this.#Lotto = []
  }

  async play() {
    await this.setGame();
  }

  async setGame(){
    this.setAmounts();
    this.setLottoNumbers();
  }

  async setAmounts(){
    const inputAmounts = await this.#inputView.readAmounts()
    const amounts = new Amounts(inputAmounts)

    this.#amounts = amounts.getAmounts();
  }

}

export default App;
