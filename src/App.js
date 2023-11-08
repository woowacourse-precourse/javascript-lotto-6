import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #money;

  #lottos = [];

  #winningNumbers;

  #bonusNumber;

  #winningList = [0, 0, 0, 0, 0];

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
    MissionUtils.Console.print("\n");
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
    this.#winningNumbers = new Set(numbers.split(",").map(Number));
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
      "\n보너스 번호를 입력해 주세요.\n",
    );
    App.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  #DecideSecondOrThird(hasBonus) {
    const THIRD = 2;
    const SECOND = 3;
    if (hasBonus) {
      this.#winningList[SECOND] += 1;
      return;
    }
    this.#winningList[THIRD] += 1;
  }

  checkLotto(lotto) {
    let win = 0;
    let hasBonus = false;
    const numbers = lotto.getNumbers();
    const FIFTH = 0;
    const FOURTH = 1;
    const FIRST = 4;

    for (let i = 0; i < numbers.length; i += 1) {
      if (this.#winningNumbers.has(numbers[i])) {
        win += 1;
      }
      if (this.#bonusNumber === numbers[i]) {
        hasBonus = true;
      }
    }
    switch (win) {
      case 3:
        this.#winningList[FIFTH] += 1;
        break;
      case 4:
        this.#winningList[FOURTH] += 1;
        break;
      case 5:
        this.#DecideSecondOrThird(hasBonus);
        break;
      case 6:
        this.#winningList[FIRST] += 1;
        break;
      default:
    }
  }

  checkLottos() {
    for (let i = 0; i < this.#lottos.length; i += 1) {
      this.checkLotto(this.#lottos[i]);
    }
  }

  printResults() {
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.#winningList[0]}개`,
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.#winningList[1]}개`,
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.#winningList[2]}개`,
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#winningList[3]}개`,
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.#winningList[4]}개`,
    );
  }

  printYield() {
    MissionUtils.Console.print("\n당첨 통계\n---");
    const calculation = (
      ((this.#winningList[0] * 5000 +
        this.#winningList[1] * 50000 +
        this.#winningList[2] * 1500000 +
        this.#winningList[3] * 30000000 +
        this.#winningList[4] * 2000000000) /
        this.#money) *
      100
    ).toFixed(1);
  }

  async play() {
    await this.getMoneyInput();
    for (let i = 0; i < this.#money / 1000; i += 1) {
      this.purchaseLotto();
    }
    this.printLottoList();
    await this.getWinningNumbers();
    await this.getBonusNumber();
    this.checkLottos();
    this.printResults();
    this.printYield();
  }
}

export default App;
