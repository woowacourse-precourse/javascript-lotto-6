import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";
import LottoManagement from "./LottoManagement.js";
import LottoResultChecker from "./LottoResultChecker.js";
import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
  THREE_MATCH_PRICE,
  FOUR_MATCH_PRICE,
  FIVE_MATCH_PRICE,
  FIVE_AND_BONUS_MATCH_PRICE,
  SIX_MATCH_PRICE,
} from "./constant/lotto.js";

class App {
  constructor() {
    this.lottoManagement = new LottoManagement();
    this.lottoResultChecker = new LottoResultChecker();
  }

  async retryUntilSuccess(asyncFunc) {
    while (1) {
      try {
        await asyncFunc();
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async play() {
    await this.retryUntilSuccess(async () => {
      this.inputPurchasePrice = await this.getPurchasePrice();

      this.purchasePrice = this.convertToNum(this.inputPurchasePrice);

      this.checkValidationInputPrice(this.purchasePrice);
    });

    const lottoCount = Number(this.purchasePrice / LOTTO_PRICE);

    await this.retryUntilSuccess(async () => {
      this.generatedLottoNumbers =
        this.lottoManagement.getLottoArray(lottoCount);
    });

    const generatedLottoNumbersArr = this.generatedLottoNumbers.map((lotto) =>
      lotto.getNumbers()
    );

    Console.print(`${lottoCount}개를 구매했습니다.`);

    this.generatedLottoNumbers.forEach((lotto) => {
      lotto.print();
    });

    await this.retryUntilSuccess(async () => {
      this.winningNumbers = this.lottoResultChecker.convertToArr(
        await this.lottoResultChecker.inputWinningLottoNum()
      );
      new Lotto(this.winningNumbers);
    });

    await this.retryUntilSuccess(async () => {
      this.bonusNumber = this.convertToNum(await this.inputBonusNumber());

      this.checkValidateInputBonus(this.bonusNumber);
    });

    this.includedbonusArr = this.countBonuses(this.generatedLottoNumbers);

    this.matchingCounts = this.lottoResultChecker.compareInputNumAndRandomNum(
      this.winningNumbers,
      generatedLottoNumbersArr
    );

    this.matchingCountsResult = this.lottoResultChecker.getMatchingCounts(
      this.matchingCounts,
      this.includedbonusArr
    );

    this.totalProfit = this.calculateTotalProfit();
    this.profitRate = this.calculateProfitRate();
    this.roundedProfitRate = this.roundProfitRate(this.profitRate);
    this.printResult();
  }

  async getPurchasePrice() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return input;
  }

  checkValidationInputPrice(purchasePrice) {
    if (
      isNaN(purchasePrice) ||
      purchasePrice % 1000 !== 0 ||
      purchasePrice <= 0 ||
      purchasePrice % 1 !== 0
    ) {
      throw new Error("[ERROR] 구입금액을 올바르게 입력해 주세요.");
    }
  }

  async inputBonusNumber() {
    return await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }

  convertToNum(str) {
    return Number(str);
  }

  checkValidateInputBonus(bonus) {
    if (
      isNaN(Number(bonus)) ||
      bonus < LOTTO_MIN_NUMBER ||
      bonus > LOTTO_MAX_NUMBER
    ) {
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
    return randomArrs.map((randomArr) =>
      randomArr.getNumbers().includes(this.bonusNumber) ? 1 : 0
    );
  }
  calculateTotalProfit() {
    const totalProfit =
      THREE_MATCH_PRICE * this.matchingCountsResult.three +
      FOUR_MATCH_PRICE * this.matchingCountsResult.four +
      FIVE_MATCH_PRICE * this.matchingCountsResult.five +
      FIVE_AND_BONUS_MATCH_PRICE * this.matchingCountsResult.fiveAndBonus +
      SIX_MATCH_PRICE * this.matchingCountsResult.six;
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
