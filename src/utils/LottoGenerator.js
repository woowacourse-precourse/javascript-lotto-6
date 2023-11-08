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

  #getLottoNumber() {
    while (this.#numbers.length !== 6) {
      this.#addBall();
    }
    const lottoNumber = this.#numbers;
    this.#numbers = [];
    return lottoNumber;
  }

  getMultipleLotto(lottoCount) {
    const lottoNumbers = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumber = this.#getLottoNumber();
      MissionUtils.Console.print(lottoNumber.sort((a, b)=> a - b, 0));
      lottoNumbers.push(lottoNumber);
    }
    return lottoNumbers;
  }
}

export default LottoGenerator;