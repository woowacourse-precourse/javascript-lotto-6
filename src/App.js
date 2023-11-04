import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #money = 0;
  #trialNum = 0;
  #lotto = [];
  #totalLotto = [];

  async play() {
    this.inputAmount();
  }

  async inputAmount() {
    Console.print("구입금액을 입력해 주세요.");
    this.#money = await Console.readLineAsync("");
    this.calcTickets();
  }

  calcTickets() {
    this.#trialNum = Math.floor(this.#money / 1000);

    const remainer = this.#money % 1000;
    if (remainer == 0) {
      Console.print("성공");
      this.RandomNums();
    } else {
      Console.print("실패"); // 에러로 종료
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
    let inputArr = [];

    if (!input) {
      Console.print("에러");
    } else if (input.includes(",")) {
      inputArr = input.split(",");

      new Lotto(inputArr);
    }
    Console.print("보너스 번호를 입력해 주세요.");
    const inputBonus = await Console.readLineAsync(""); // 한자리 제한, 1~45인지 확인해야함

    this.compare(inputArr, inputBonus);
  }

  compare(inputArr, inputBonus, totalLotto) {
    Console.print(inputArr);
    Console.print(inputBonus);
    Console.print(this.#totalLotto);
  }
}

export default App;
