import { Console } from '@woowacourse/mission-utils';
import priceModel from './models/priceModel.js';
import PriceValidation from './Validations/PriceValidation.js';
import inputs from './View/inputs.js';
import outputs from './View/outputs.js';

class Price {
  #price;

  #number;

  constructor() {
    this.#price = 0;
    this.#number = 0;
  }

  async #validate() {
    try {
      const priceAnswer = await inputs.enterPrice();
      const validation = new PriceValidation(priceAnswer);

      validation.finishValidation();

      return priceAnswer;
    } catch (error) {
      Console.print(error.message);
      return this.#validate();
    }
  }

  #setPriceAndNumber(answer) {
    this.#price = Number(answer);
    this.#number = priceModel.calculateNumberOfLotto(this.#price);
  }

  async controlPrice() {
    const answer = await this.#validate();

    this.#setPriceAndNumber(answer);

    outputs.printNumberOfLotto(this.#number);
  }

  getPriceAndNumber() {
    return [this.#price, this.#number];
  }
}

export default Price;
