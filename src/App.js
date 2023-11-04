import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.purchasePrice = 0;
    this.purchaseCount = 0;
    this.randomLottoNumber = [];
    this.threeMatches = 0;
    this.fourMatches = 0;
    this.fiveMatches = 0;
    this.fiveAndBonusMatches = 0;
    this.sixMatches = 0;
  }
  async play() {
    this.purchasePrice = await this.inputPurchasePrice();
    this.isValidInputPrice = this.isValidInputPrice();
    this.printPriceError(this.isValidInputPrice);
    this.purchaseCount = this.calculatePurchaseCount();
    this.printPurchaseCount();

    while (this.purchaseCount > 0) {
      this.createLottoNumber();
      this.purchaseCount -= 1;
    }

    this.printRandomNumArr();
    this.inputLottoNum = await this.inputMyLottoNumber();
    this.inputLottoNumArr = this.convertToArr(this.inputLottoNum);
    this.checkValidateInputLottoNum(this.inputLottoNumArr);
    this.bonus = await this.inputBonusNumber();
    this.checkValidateInputBonus(this.bonus);
    this.bonusArr = this.countBonuses(this.randomLottoNumber);
    console.log(this.inputLottoNumArr);
    console.log(this.randomLottoNumber);
    console.log(this.bonusArr);

    this.matchingCounts = this.compareInputNumAndRandomNum(
      this.inputLottoNumArr,
      this.randomLottoNumber
    );
    console.log(this.matchingCounts);

    this.countMatchingNumbers(this.matchingCounts);

    this.totalProfit = this.calculateTotalProfit();
    console.log(this.totalProfit);

    this.profitRate = this.calculateProfitRate();
    this.printResult();
  }
  async inputPurchasePrice() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return +input;
  }

  isValidInputPrice() {
    return this.purchasePrice % 1000 === 0;
  }
  printPriceError(isValid) {
    if (!isValid) {
      throw new Error("[ERROR] 1,000원 단위의 금액을 입력해 주세요.");
    }
  }

  calculatePurchaseCount() {
    return this.purchasePrice / 1000;
  }

  printPurchaseCount() {
    Console.print(`${this.purchaseCount}개를 구매했습니다.`);
  }
  createLottoNumber() {
    this.randomLottoNumber.push(Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  printRandomNumArr() {
    this.randomLottoNumber.forEach((_, index) => {
      Console.print(this.randomLottoNumber[index]);
    });
  }
  async inputMyLottoNumber() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return input;
  }
  convertToArr(inputNum) {
    return inputNum.split(",").map((element) => parseInt(element));
  }

  checkValidateInputLottoNum(inputNum) {
    if (inputNum.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6자리를 입력해 주세요.");
    }
    if (
      inputNum.some(
        (number) =>
          isNaN(Number(number)) || number < 1 || number > 45 || number % 1 !== 0
      )
    ) {
      throw new Error(
        "[ERROR] 입력한 숫자는 1부터 45 사이의 자연수이어야 합니다."
      );
    }
    if (inputNum.length !== new Set(inputNum).size) {
      throw new Error("[ERROR] 중복된 숫자는 입력하면 안 됩니다.");
    }
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return +input;
  }
  checkValidateInputBonus(bonus) {
    if (isNaN(Number(bonus)) || bonus < 1 || bonus > 45) {
      throw new Error(
        "[ERROR] 1부터 45 사이의 숫자 한 개만 입력이 가능합니다."
      );
    }
    if (bonus % 1 !== 0) {
      throw new Error("[ERROR] 자연수만 입력이 가능합니다.");
    }
    if (this.inputLottoNumArr.includes(bonus)) {
      throw new Error("[ERROR] 입력한 당첨 번호 외 숫자를 입력해 주세요.");
    }
  }

  countBonuses(randomArrs) {
    const bonusArray = Array.from({ length: randomArrs.length }, () => 0);

    for (const randomArr of randomArrs) {
      if (randomArr.includes(this.bonus)) {
        bonusArray[randomArrs.indexOf(randomArr)] += 1;
      }
    }

    return bonusArray;
  }

  compareInputNumAndRandomNum(inputArr, randomArrs) {
    const counts = [];

    for (const randomArr of randomArrs) {
      const matchingCount = inputArr.reduce((accumalator, inputValue) => {
        return accumalator + (randomArr.includes(inputValue) ? 1 : 0);
      }, 0);
      counts.push(matchingCount);
    }
    return counts;
  }
  countMatchingNumbers(counts) {
    for (const count of counts) {
      if (count === 3) {
        this.threeMatches += 1;
      }
      if (count === 4) {
        this.fourMatches += 1;
      }
      if (count === 5) {
        this.fiveMatches += 1;
      }
      if (count === 5 && count.includes(this.bonus)) {
        this.fiveAndBonusMatches += 1;
      }
      if (count === 6) {
        this.sixMatches += 1;
      }
    }
  }

  calculateTotalProfit() {
    const totalProfit =
      5000 * this.threeMatches +
      10000 * this.fourMatches +
      1500000 * this.fiveMatches +
      30000000 * this.fiveAndBonusMatches +
      2000000000 * this.sixMatches;
    return totalProfit;
  }

  calculateProfitRate() {
    return (this.totalProfit / this.purchasePrice) * 100;
  }

  printResult() {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.threeMatches}개`);
    Console.print(`4개 일치 (10,000원) - ${this.fourMatches}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.fiveMatches}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.fiveAndBonusMatches}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.sixMatches}개`);
    Console.print(`총 수익률은 ${this.totalProfit}%입니다.`);
  }
}
export default App;
