import { Console } from '@woowacourse/mission-utils';
import Price from './Price.js';
import Random from './Random.js';
import inputs from './View/inputs.js';
import outputs from './View/outputs.js';

class App {
  async play() {
    const { price, number } = await this.#executePrice();
    const random = this.#executeRandom(number);
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
}

export default App;
