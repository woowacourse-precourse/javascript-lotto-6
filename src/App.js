import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { InputValidator } from "./utils/InputValidator.js";

class App {
  #money = 0;
  #trialNum = 0;
  #lotto = [];
  #totalLotto = [];
  #winningLotto = [];
  #bonus = 0;

  async play() {
    this.inputAmount();
  }

  async inputAmount() {
    Console.print("구입금액을 입력해 주세요.");
    this.#money = await Console.readLineAsync("");
    this.calcTickets();
  }

  calcTickets() {
    if (!InputValidator.validMoney(this.#money)) {
      throw new Error("금액 오류");
    } else {
      this.#trialNum = Math.floor(this.#money / 1000);
      this.RandomNums();
    }
  }

  RandomNums() {
    for (let i = 0; i < this.#trialNum; i++) {
      for (let r = 0; r < 6; r++) {
        const random = Random.pickNumberInRange(1, 45);
        this.#lotto.push(random);
      }
      Console.print(this.#lotto);
      this.#totalLotto.push(this.#lotto);
      this.#lotto = [];
    }

    Console.print(this.#totalLotto);
    this.inputWinning();
  }

  async inputWinning() {
    Console.print("당첨 번호를 입력해 주세요.");
    const input = await Console.readLineAsync("");

    if (!InputValidator.validWinningNumber(input)) {
      throw new Error("번호 오류");
    } else {
      this.#winningLotto = input.split(",");
      new Lotto(this.#winningLotto);
    }

    Console.print("보너스 번호를 입력해 주세요.");
    this.#bonus = await Console.readLineAsync("");

    if (!InputValidator.validBonusNumber(this.#bonus)) {
      throw new Error("번호 오류");
    }
    this.compare();
  }

  compare() {
    Console.print(this.#winningLotto);
    Console.print(Number(this.#bonus));
    Console.print(this.#totalLotto);
  }
}

export default App;
