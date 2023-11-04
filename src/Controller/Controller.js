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
  
  async buyLotto() {
    const price = await this.#view.inputPrice();
    this.#consumer = new Consumer(price);
    const quantity = this.#consumer.getQuantity();
    this.#view.printQuantity(quantity);
    const lottoNumber = this.#consumer.getLottoNumber();
    this.#view.printLottoNumber(lottoNumber);
  }

  async playLotto() {
    const winningNumber = await this.#view.inputWinningNumber();
    this.#lotto = new Lotto(winningNumber);
    const bonus = await this.#view.inputBonus();
    this.#lotto.setBonus(bonus);
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