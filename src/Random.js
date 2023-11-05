import randomModel from './models/randomModel.js';
import outputs from './View/outputs.js';

class Random {
  #random;

  constructor() {
    this.#random = [];
  }

  #setRandom(number) {
    this.#random = randomModel.getRandom(number);
  }

  controlRandom(number) {
    this.#setRandom(number);

    const randomString = randomModel.getStringOfRandom(this.#random);

    outputs.printRandoms(randomString);
  }

  getRandom() {
    return this.#random;
  }
}

export default Random;
