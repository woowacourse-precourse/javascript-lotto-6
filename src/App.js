import { Console } from '@woowacourse/mission-utils';
import Price from './Price.js';
import Random from './Random.js';
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import Stats from './Stats.js';
import lottoModel from './models/lottoModel.js';
import inputs from './View/inputs.js';
import outputs from './View/outputs.js';

class App {
  async play() {
    const { price, number } = await this.#executePrice();
    const random = this.#executeRandom(number);
    const lotto = await this.#executeLotto();
    const bonus = await this.#executeBonus(lotto);
    const revenues = this.#executeStats(random, lotto, bonus);
  }

  async #executePrice() {
    try {
      const priceAnswer = await inputs.enterPrice();
      const priceObject = new Price(Number(priceAnswer));
      const { number } = priceObject.getPriceAndNumber();

      outputs.printNumberOfLotto(number);

      return { ...priceObject.getPriceAndNumber() };
    } catch (error) {
      Console.print(error.message);
      return this.#executePrice();
    }
  }

  #executeRandom(number) {
    const randomObject = new Random(number);
    const { random, randomString } = randomObject.getRandomAndRandomString();

    outputs.printRandoms(randomString);

    return random;
  }

  async #executeLotto() {
    try {
      const lottoAnswer = await inputs.enterLotto();
      const numbers = lottoModel.convertToNumber(lottoAnswer);
      const lottoObject = new Lotto(numbers);

      return lottoObject.getLotto();
    } catch (error) {
      Console.print(error.message);
      return this.#executeLotto();
    }
  }

  async #executeBonus(lotto) {
    try {
      const bonusAnswer = await inputs.enterBonus();
      const bonusObject = new Bonus(Number(bonusAnswer), lotto);

      return bonusObject.getBonus();
    } catch (error) {
      Console.print(error.message);
      return this.#executeBonus(lotto);
    }
  }

  #executeStats(random, lotto, bonus) {
    const statsObject = new Stats(random, lotto, bonus);
    const { revenues, stats } = statsObject.getRevenuesAndStats();

    outputs.printStatsTitle();
    outputs.printStats(stats);

    return revenues;
  }
}

export default App;
