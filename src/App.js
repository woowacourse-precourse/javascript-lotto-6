import Price from './Price.js';
import Random from './Random.js';
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import Stats from './Stats.js';
import Rate from './Rate.js';

class App {
  #price;

  #number;

  #random;

  #lotto;

  #bonus;

  #revenues;

  constructor() {
    this.#price = 0;
    this.#number = 0;
    this.#random = [];
    this.#bonus = 0;
    this.#revenues = [];
  }

  async play() {
    await this.#executePrice();

    this.#executeRandom();

    await this.#executeLotto();

    await this.#executeBonus();

    this.#executeStats();

    this.#executeRate();
  }

  async #executePrice() {
    const priceObject = new Price();

    await priceObject.controlPrice();

    const [price, number] = priceObject.getPriceAndNumber();

    this.#price = price;
    this.#number = number;
  }

  #executeRandom() {
    const randomObject = new Random();

    randomObject.controlRandom(this.#number);

    this.#random = randomObject.getRandom();
  }

  async #executeLotto() {
    const lottoObject = new Lotto();

    await lottoObject.controlLotto();

    this.#lotto = lottoObject.getLotto();
  }

  async #executeBonus() {
    const bonusObject = new Bonus();

    await bonusObject.controlBonus(this.#lotto);

    this.#bonus = bonusObject.getBonus();
  }

  #executeStats() {
    const statsObject = new Stats();

    statsObject.controlCount(this.#random, this.#lotto, this.#bonus);

    this.#revenues = statsObject.getRevenues();
  }

  #executeRate() {
    const rateObject = new Rate();

    rateObject.controlRate(this.#revenues, this.#price);
  }
}

export default App;
