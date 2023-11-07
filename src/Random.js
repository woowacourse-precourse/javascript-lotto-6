import randomModel from './models/randomModel.js';

class Random {
  #random;

  #randomString;

  constructor(number) {
    this.#random = randomModel.getRandom(number);
    this.#randomString = randomModel.getStringOfRandom(this.#random);
  }

  getRandomAndRandomString() {
    return { random: this.#random, randomString: this.#randomString };
  }
}

export default Random;
