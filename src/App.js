import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { InputValidator } from "./utils/InputValidator.js";
import Output from "./Output.js";

class App {
  #money = 0;
  #trialNum = 0;
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
      let lotto = new Output();
      const newLotto = lotto.createLotto();
      Console.print(newLotto);
      this.#totalLotto.push(newLotto);
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
