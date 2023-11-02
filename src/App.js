import Lotto from "./Lotto.js";

class App {
  #winningNumbers;
  #bonusNumber;
  #lottos = [];

  async play() {
    try {
      const purchaseAmount = await this.#inputPurchaseAmount();
      this.#generateLottos(purchaseAmount);
      await this.#inputWinningNumbers();
      await this.#inputBonusNumber();
      this.#calculateResults();
      this.#printResults();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.play(); // 잘못된 입력 후 재시도
    }
  }

  async #inputPurchaseAmount() {
    let purchaseAmount = await MissionUtils.Console.readLineAsync(
      "구입 금액을 입력해 주세요."
    );
    purchaseAmount = parseInt(purchaseAmount, 10);
    if (
      isNaN(purchaseAmount) ||
      purchaseAmount <= 0 ||
      purchaseAmount % 1000 !== 0
    ) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양수여야 합니다.");
    }
    return purchaseAmount;
  }

  #generateLottos(purchaseAmount) {
    const numberOfLottos = purchaseAmount / 1000;
    MissionUtils.Console.print(`${numberOfLottos}개를 구매했습니다.`);
    for (let i = 0; i < numberOfLottos; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
      MissionUtils.Console.print(`[${numbers.join(", ")}]`);
    }
  }

  async #inputWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(
      "지난 주 당첨 번호를 입력해 주세요."
    );
    const numbers = input.split(",").map((num) => parseInt(num.trim(), 10));
    this.#winningNumbers = new Lotto(numbers);
  }

  async #inputBonusNumber() {
    const bonusNumber = parseInt(
      await MissionUtils.Console.readLineAsync("보너스 볼을 입력해 주세요."),
      10
    );
    if (this.#winningNumbers.numbers.includes(bonusNumber)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 다른 값이어야 합니다."
      );
    }
    this.#bonusNumber = bonusNumber;
  }
}

export default App;
