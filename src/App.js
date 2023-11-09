import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";
import LottoManagement from "./LottoManagement.js";
import LottoResultChecker from "./LottoResultChecker.js";
import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
  BONUS_ERROR_MESSAGE,
  PRICE_ERROR_MESSAGE,
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
      this.winningNumbers = this.convertToArr(
        await this.inputWinningLottoNum()
      );
      new Lotto(this.winningNumbers);
    });

    await this.retryUntilSuccess(async () => {
      this.bonusNumber = this.convertToNum(await this.inputBonusNumber());

      this.checkValidateInputBonus(this.bonusNumber);
    });

    this.includedbonusArr = this.lottoManagement.countBonuses(
      this.generatedLottoNumbers,
      this.bonusNumber
    );

    this.matchingCounts = this.lottoManagement.compareInputNumAndRandomNum(
      this.winningNumbers,
      generatedLottoNumbersArr
    );

    this.matchingCountsResult = this.lottoManagement.getMatchingCounts(
      this.matchingCounts,
      this.includedbonusArr
    );

    this.totalProfit = this.lottoResultChecker.calculateTotalProfit(
      this.matchingCountsResult
    );
    this.profitRate = this.lottoResultChecker.calculateProfitRate(
      this.totalProfit,
      this.purchasePrice
    );
    this.roundedProfitRate = this.lottoResultChecker.roundProfitRate(
      this.profitRate
    );
    this.lottoResultChecker.printResult(
      this.matchingCountsResult,
      this.roundedProfitRate
    );
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
      throw new Error(PRICE_ERROR_MESSAGE);
    }
  }
  async inputWinningLottoNum() {
    return await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  }
  convertToArr(inputNum) {
    return inputNum.split(",").map((element) => Number(element));
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
      throw new Error(BONUS_ERROR_MESSAGE.INVALID_BONUS_NUMBER_ERROR);
    }
    if (bonus % 1 !== 0) {
      throw new Error(BONUS_ERROR_MESSAGE.NON_INTEGER_INPUT_ERROR);
    }
    if (this.winningNumbers.includes(bonus)) {
      throw new Error(BONUS_ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER_ERROR);
    }
  }
}
export default App;
