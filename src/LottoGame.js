import { Console, Random } from "@woowacourse/mission-utils";
import { validateBonusNumber, validateInputMoney } from "./Validator.js";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";

class LottoGame {
  #gameCount;
  #lottoList;
  #winningNumber;
  #bonusNumber;

  constructor() {
    this.#gameCount = 0;
    this.#lottoList = [];
    this.#winningNumber = [];
    this.#bonusNumber = 0;
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

  async getWinningNumber() {
    try {
      const WinningInput = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      this.#winningNumber = new Lotto(WinningInput.split(",").map(Number));
      await this.getBonusNumber();
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumber();
    }
  }

  async getBonusNumber() {
    try {
      this.#bonusNumber = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );
      validateBonusNumber(this.#bonusNumber);
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber();
    }
  }

  checkLottoNumbers() {
    try {
      const result = new LottoResult(
        this.#lottoList,
        this.#winningNumber,
        this.#bonusNumber
      );
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default LottoGame;
