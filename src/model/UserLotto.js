import { generateRandomNumber } from "../utils/RandomNumber.js";

class UserLotto {
  #userLottoNumber = [];

  constructor(lottoCount) {
    this.#setUserLottoNumber(lottoCount);
  }

  #setUserLottoNumber(count) {
    Array.from({ length: count }).forEach(() => {
      this.#userLottoNumber.push(generateRandomNumber());
    });
  }

  getLottoNumber() {
    return this.#userLottoNumber;
  }
}

export default UserLotto;
