import View from '../View/View.js'
import Consumer from '../Model/Consumer.js'
import Lotto from '../Lotto.js';
import Statistics from '../Model/Statistics.js'

class Controller {
  #view;
  #consumer;
  #lotto;
  #statistics;

  constructor() {
    this.#view = new View();
  }
  
  async #pay() {
    let errorCheck = true;

    while(errorCheck){
      try {
        const price = await this.#view.inputPrice()
        this.#consumer = new Consumer(price);
        errorCheck = false;
      } catch (error) {
        this.#view.printError(error.message);
      }
    }
  }

  async buyLotto() {
    await this.#pay();
    this.#view.printQuantity(this.#consumer.getQuantity());
    this.#consumer.pickLottoNumber();
    this.#view.printLottoNumber(this.#consumer.getLottoNumber());
  }

  async #winningPick() {
    let errorCheck = true;

    while(errorCheck){
      try {
        this.#lotto = new Lotto(await this.#view.inputWinningNumber());
        errorCheck = false;
      } catch (error) {
        this.#view.printError(error.message);
      }
    }
  }

  async #bonusPick() {
    let errorCheck = true;

    while(errorCheck){
      try {
        this.#lotto.setBonus(await this.#view.inputBonus());
        errorCheck = false;
      } catch (error) {
        this.#view.printError(error.message);
      }
    }
  }

  async playLotto() {
    await this.#winningPick();
    await this.#bonusPick();
  }

  result() {
    const winningNumber = this.#lotto.getWinningNumbers();
    const bonus = this.#lotto.getBonus();
    const lottoNumber = this.#consumer.getLottoNumber();
    this.#statistics = new Statistics(winningNumber, lottoNumber, bonus);
    const result = this.#statistics.getResult();
    this.#view.printResult(result);
    const roi = this.#statistics.getROI();
    this.#view.printROI(roi);
  }
}

export default Controller;