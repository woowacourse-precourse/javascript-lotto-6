import { Console, Random } from "@woowacourse/mission-utils";
import { validateInputMoney } from "./Validator.js";

class LottoGame {
  #gameCount;
  #lottoList;

  constructor() {
    this.#gameCount = 0;
    this.#lottoList = [];
  }

  async getUserInputMoney() {
    try {
      const userInputMoney = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      validateInputMoney(userInputMoney);
      this.#gameCount = userInputMoney / 1000;

      this.generateLottoNumbers();
    } catch (error) {
      Console.print(error.message);
    }
  }

  generateLottoNumbers() {
    for (let i = 0; i < this.#gameCount; i++) {
      const lottoNum = this.sortRandomLottoNumbers();
      this.#lottoList.push(lottoNum);
    }
    this.printLottoNumbers();
  }

  sortRandomLottoNumbers() {
    const ramdomNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    ramdomNum.sort((a, b) => a - b);

    return ramdomNum;
  }

  printLottoNumbers() {
    Console.print(`\n${this.#gameCount}개를 구매했습니다.`);
    this.#lottoList.forEach((lottoNum) => {
      Console.print(`[${lottoNum.join(", ")}]`);
    });
  }
}

export default LottoGame;
