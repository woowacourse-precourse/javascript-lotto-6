import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoManagement from "./LottoManagement.js";
import LottoResultChecker from "./LottoResultChecker.js";
const numericPattern = /^\d+$/;
const lottoPrice = 1000;
class App {
  constructor() {
    this.lottoManagement = new LottoManagement();
    this.lottoResultChecker = new LottoResultChecker();
  }
  async play() {
    this.purchasePrice = await this.inputPurchasePrice();
    this.checkValidationInputPrice(this.purchasePrice);
    const lottoCount = Number(this.purchasePrice / lottoPrice);

    const generatedLottoNumbers =
      this.lottoManagement.getLottoArray(lottoCount);
    const generatedLottoNumbersArr = generatedLottoNumbers.map((lotto) =>
      lotto.getNumbers()
    );

    Console.print(`${lottoCount}개를 구매했습니다.`);

    generatedLottoNumbers.forEach((lotto) => {
      lotto.print();
    });

    this.winningNumbers = this.lottoResultChecker.convertToArr(
      await this.lottoResultChecker.inputWinningLottoNum()
    );

    const inputLottoNumErrors = new Lotto(this.winningNumbers);

    this.bonusNumber = this.convertToNum(await this.inputBonusNumber());

    this.checkValidateInputBonus(this.bonusNumber);

    const includedbonusArr = this.countBonuses(generatedLottoNumbers);

    this.matchingCounts = this.lottoResultChecker.compareInputNumAndRandomNum(
      this.winningNumbers,
      generatedLottoNumbersArr
    );
    this.matchingCountsResult = this.lottoResultChecker.getMatchingCounts(
      this.matchingCounts,
      this.bonusNumber,
      generatedLottoNumbersArr
    );
    this.totalProfit = this.calculateTotalProfit();
    this.profitRate = this.calculateProfitRate();
    this.roundedProfitRate = this.roundProfitRate(this.profitRate);
    this.printResult();
  }

  async inputPurchasePrice() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return +input;
  }
  checkValidationInputPrice() {
    if (isNaN(this.purchasePrice)) {
      throw new Error("[ERROR] 숫자만 입력이 가능합니다.");
    }
  }
  async inputBonusNumber() {
    return await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }

  convertToNum(bonus) {
    return Number(bonus);
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
    if (this.winningNumbers.includes(bonus)) {
      throw new Error("[ERROR] 입력한 당첨 번호 외 숫자를 입력해 주세요.");
    }
  }
  countBonuses(randomArrs) {
    const bonusArray = Array.from({ length: randomArrs.length }, () => 0);

    for (let i = 0; i < randomArrs.length; i++) {
      if (randomArrs[i].getNumbers().includes(this.bonusNumber)) {
        bonusArray[i] += 1;
      }
    }

    return bonusArray;
  }
  calculateTotalProfit() {
    const totalProfit =
      5000 * this.matchingCountsResult.three +
      10000 * this.matchingCountsResult.four +
      1500000 * this.matchingCountsResult.five +
      30000000 * this.matchingCountsResult.fiveAndBonus +
      2000000000 * this.matchingCountsResult.six;
    return totalProfit;
  }
  roundProfitRate(profitRate) {
    return profitRate.toFixed(1);
  }
  calculateProfitRate() {
    return (this.totalProfit / this.purchasePrice) * 100;
  }
  printResult() {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.matchingCountsResult.three}개`);
    Console.print(`4개 일치 (50,000원) - ${this.matchingCountsResult.four}개`);
    Console.print(
      `5개 일치 (1,500,000원) - ${this.matchingCountsResult.five}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.matchingCountsResult.fiveAndBonus}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${this.matchingCountsResult.six}개`
    );
    Console.print(`총 수익률은 ${this.roundedProfitRate}%입니다.`);
  }
}
export default App;
