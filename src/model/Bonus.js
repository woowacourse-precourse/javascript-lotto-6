// import Validator from './model/Validator.js';
import { ERROR } from './util/constant.js';

class Bonus {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
    return this.#number;
  }

  #validate(number) {}
}

export default Bonus;
