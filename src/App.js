import Lotto from './settings/Lotto.js'
import Amounts from './settings/Amounts.js'
import InputView from './view/InputView.js'
import { Console } from '@woowacourse/mission-utils'

class App {

  #amounts
  #Lotto
  #Bonus
  #inputView

  constructor(){
    this.#inputView = new InputView();
    this.#Lotto = []
  }

  async play() {
    await this.setGame();
  }

  async setGame(){
    await this.setAmounts();
    await this.setLottoNumbers();
  }

  async setAmounts(){
    const inputAmounts = await this.#inputView.readAmounts();
    const amounts = new Amounts(inputAmounts);

    this.#amounts = amounts.getAmounts();
  }

  async setLottoNumbers(){
    const inputLotto = await this.#inputView.readLottoNumbers();
    const lottoNumbers = inputLotto.split(',').map((number) => Number(number));
    const lotto = new Lotto(lottoNumbers);

    this.#Lotto = lotto.getLottoNumbers();

    const bonus = await this.#inputView.readBonusNumber();
    this.#Bonus = lotto.getBonus(Number(bonus));
  }

}

export default App;
