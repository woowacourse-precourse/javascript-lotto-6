import { Console } from "@woowacourse/mission-utils";

class User {
  #myLottos;
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = Number(amount);
    this.purchaseLotto(this.purchasableLotto());
  }

  printLottos() {
    Console.print(`${this.#amount / 1000}개를 구매했습니다.`);
    this.#myLottos.map((lotto) => Console.print(lotto));
  }
}
