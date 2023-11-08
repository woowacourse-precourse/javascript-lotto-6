import { MissionUtils } from "@woowacourse/mission-utils";

class LottoGenerator {
  #numbers;

  constructor() {
    this.#numbers = [];
  }

  #getBall() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 45);
    return randomNumber;
  }

  #getIsNewBall(ball) {
    return !this.#numbers.includes(ball);
  }

  #addBall() {
    const ball = this.#getBall();
    const isNewBall = this.#getIsNewBall(ball);
    if (isNewBall) {
      this.#numbers.push(ball);
    }
  }

  getLottoNumber() {
    while (this.#numbers.length !== 6) {
      this.#addBall();
    }
    const lottoNumber = this.#numbers;
    this.#numbers = [];
    return lottoNumber;
  }

  // getMultipleLotto(lottoCount) {
  //   for (let i = 0; i < lottoCount; i++){
  //     this.#getLottoNumber();
  //     lottoNumbers.push(this.#numbers.sort((a, b) => a - b, 0));
  //     this.#numbers = [];
  //   }
  //   return lottoNumbers;
  // }
}

export default LottoGenerator;