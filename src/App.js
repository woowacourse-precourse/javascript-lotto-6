import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #money;

  #lottos = [];

  #winningNumbers;

  #bonusNumber;

  static #isPositiveInteger(input) {
    const regex = /^\d+$/;
    return regex.test(input);
  }

  static #validateMoney(money) {
    if (!App.#isPositiveInteger(money)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error(
        "[ERROR] 구입금액은 1,000원 단위이며 1,000원으로 나누어 떨어져야 합니다.",
      );
    }
  }

  async getMoneyInput() {
    const money = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n",
    );
    App.#validateMoney(money);
    this.#money = money;
  }

  purchaseLotto() {
    this.#lottos.push(
      new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)),
    );
  }

  printLottoList() {
    MissionUtils.Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottos.length; i += 1) {
      this.#lottos[i].printNumbers();
    }
  }

  static #isNumbers(numbers) {
    const regex = /^\d+(,\d+){5}$/;
    return regex.test(numbers);
  }

  static #isLottoNumber(number) {
    if (number < 1 || number > 45) {
      return false;
    }
    return true;
  }

  static #isLottoNumbers(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
      if (!this.#isLottoNumber(numbers[i])) {
        return false;
      }
    }
    return true;
  }

  static #validateWinningNumbers(numbers) {
    if (!App.#isNumbers(numbers)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    const splitedNumbers = numbers.split(",").map(Number);
    if (!App.#isLottoNumbers(splitedNumbers)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  async getWinningNumbers() {
    const numbers = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n",
    );
    App.#validateWinningNumbers(numbers);
    this.#winningNumbers = new Set(numbers.split(" "));
  }

  static #validateBonusNumber(bonusNumber) {
    if (!App.#isPositiveInteger(bonusNumber)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (!App.#isLottoNumber(bonusNumber)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  async getBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n",
    );
    App.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  async play() {
    await this.getMoneyInput();
    for (let i = 0; i < this.#money / 1000; i += 1) {
      this.purchaseLotto();
    }
    this.printLottoList();
    await this.getWinningNumbers();
    await this.getBonusNumber();
  }
}

export default App;
