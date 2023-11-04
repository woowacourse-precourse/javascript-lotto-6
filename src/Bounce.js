import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class Bounce {
  #bounce;

  constructor(bounce) {
    this.#validateBounce(bounce);
    this.#bounce = bounce;
  }

  #validateBounce(bounce) {
    const BOUNCE_IS_NUMBER_REGEX = /^[1-9]\d*$/;

    if (!BOUNCE_IS_NUMBER_REGEX.test(bounce)) {
      throw new Error(ERROR_MESSAGE.bounceIsNotNumber);
    }

    if (bounce < 1 || bounce > 45) {
      throw new Error(ERROR_MESSAGE.bounceIsExceedNumber);
    }
  }

  getBounce() {
    return parseInt(this.#bounce);
  }
}

export default Bounce;
