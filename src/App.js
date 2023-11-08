const readline = require("readline");
const { Random, Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.lottoList = [];
    this.winNumbers = [];
    this.bonusNumber = 0;
  }

  async inputPurchaseAmount() {
    let purchaseAmount;
    while (true) {
      purchaseAmount = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      if (purchaseAmount % 1000 === 0) {
        break;
      } else {
        console.log("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
      }
    }
    return purchaseAmount / 1000;
  }

  async inputWinNumbers() {
    let winNumbers;
    while (true) {
      winNumbers = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요 (1~45, 쉼표로 구분):\n"
      );
      const numbers = winNumbers.split(",").map(Number);
      if (
        numbers.length === 6 &&
        numbers.every((num) => num >= 1 && num <= 45)
      ) {
        return numbers;
      } else {
        console.log("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  async inputBonusNumber() {
    let bonusNumber;
    while (true) {
      bonusNumber = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요 (1~45):\n"
      );
      if (bonusNumber >= 1 && bonusNumber <= 45) {
        return Number(bonusNumber);
      } else {
        console.log("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  generateLottoNumbers(purchaseCount) {
    for (let i = 0; i < purchaseCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoList.push(new Lotto(numbers));
    }
  }

  checkWinningLotto() {
    const result = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };
    const winNumbersSet = new Set(this.winNumbers);
    for (const lotto of this.lottoList) {
      const lottoNumbers = lotto.getNumbers();
      const matchedCount = lottoNumbers.filter((num) =>
        winNumbersSet.has(num)
      ).length;
      if (matchedCount === 6) {
        result[6]++;
      } else if (
        matchedCount === 5 &&
        lottoNumbers.includes(this.bonusNumber)
      ) {
        result["5+bonus"]++;
      } else {
        result[matchedCount]++;
      }
    }
    return result;
  }

  calculatePrizeMoney(winningResults) {
    const prizeTable = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+bonus": 30000000,
      6: 2000000000,
    };
    let totalPrize = 0;
    let totalPurchaseCount = this.lottoList.length;
    for (const key in winningResults) {
      if (winningResults[key] > 0) {
        totalPrize += winningResults[key] * prizeTable[key];
        totalPurchaseCount -= winningResults[key];
      }
    }
    return (totalPrize / (totalPurchaseCount * 1000)).toFixed(1);
  }

  async play() {
    const purchaseCount = await this.inputPurchaseAmount();
    this.generateLottoNumbers(purchaseCount);
    this.winNumbers = await this.inputWinNumbers();
    this.bonusNumber = await this.inputBonusNumber();
    const winningResults = this.checkWinningLotto();

    console.log(
      `${purchaseCount * 1000}원으로 ${purchaseCount}개를 구매했습니다.`
    );
    for (const lotto of this.lottoList) {
      console.log(lotto.getNumbers().sort((a, b) => a - b));
    }
    console.log("당첨 번호를 입력해 주세요.");
    console.log(`당첨 통계`);
    console.log(`---`);
    for (const key in winningResults) {
      console.log(
        `${key}개 일치 (${key === "5+bonus" ? "보너스 볼" : ""}) - ${
          winningResults[key]
        }개`
      );
    }
    console.log(
      `총 수익률은 ${this.calculatePrizeMoney(winningResults)}%입니다.`
    );
    this.rl.close();
  }
}

const app = new App();
app.play();
export default App;
