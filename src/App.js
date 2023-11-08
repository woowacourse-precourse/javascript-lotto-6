import { Console, Random } from "@woowacourse/mission-utils";
import GetPurchaseAmount from "./GetPurchaseAmount.js";
import GetBonusNumber from "./GetBonusNumber.js";
import Lotto from "./Lotto.js";
import {
  INPUT_BONUS_NUMBER,
  INPUT_PRIZE_NUMBER,
  INPUT_PURCHASE_AMOUNT,
  UNIT_OF_PURCHASE,
} from "./constants/index.js";
import Result from "./Result.js";

class App {
  purchaseAmount;
  purchaseNumber;
  lottoNumbers;
  winningNumbers;
  bonusNumber;
  result;

  constructor() {
    this.result = new Result();
  }

  async getPurchaseAmount() {
    this.purchaseAmount = await Console.readLineAsync(INPUT_PURCHASE_AMOUNT);
    try {
      const checkPurchaseInput = new GetPurchaseAmount(this.purchaseAmount);
      this.purchaseNumber = this.purchaseAmount / UNIT_OF_PURCHASE;
    } catch (error) {
      Console.print(error.message);

      return await this.getPurchaseAmount();
    }
  }

  getRandomLottoNumbers() {
    const lottoNumbers = [];
    for (let i = 0; i < this.purchaseNumber; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = numbers.sort((a, b) => a - b);
      lottoNumbers.push(sortedNumbers);
    }
    this.lottoNumbers = lottoNumbers;
  }

  printPurchaseLottos() {
    Console.print("");
    Console.print(`${this.purchaseNumber}개를 구매했습니다.`);
    this.lottoNumbers.forEach((lottoNumber) =>
      Console.print(`[${lottoNumber.join(", ")}]`),
    );
    Console.print("");
  }

  async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(INPUT_PRIZE_NUMBER);
    try {
      const winningNumbersArray = winningNumbers.split(",");
      const checkWinningNumbers = new Lotto(winningNumbersArray);
      this.winningNumbers = checkWinningNumbers.getNumbers();
    } catch (error) {
      Console.print(error.message);

      return await this.getWinningNumbers();
    }
  }

  async getBonusNumber() {
    this.bonusNumber = await Console.readLineAsync(INPUT_BONUS_NUMBER);
    try {
      const checkBonus = new GetBonusNumber(
        this.winningNumbers,
        this.bonusNumber,
      );
    } catch (error) {
      Console.print(error.message);

      return await this.getBonusNumber(this.winningNumbers);
    }
  }

  isHit(lottoNumber) {
    let hit = 0;
    let bonusHit = false;

    this.winningNumbers.forEach((winningNumber) => {
      if (lottoNumber.includes(Number(winningNumber))) hit++;
    });

    if (lottoNumber.includes(Number(this.bonusNumber))) {
      bonusHit = true;
    }

    return { hit, bonusHit };
  }

  printTotalYield() {
    const sum = this.result.calculateTotalYield();
    const totalYield = ((sum / this.purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${totalYield}%입니다.`);
  }

  checkWinningStatics(lottoNumbers) {
    lottoNumbers.forEach((lottoNumber) => {
      const { hit, bonusHit } = this.isHit(lottoNumber);
      this.result.updateResult(hit, bonusHit);
    });

    this.result.printResult();
    this.printTotalYield();
  }

  async play() {
    await this.getPurchaseAmount();
    this.getRandomLottoNumbers();
    this.printPurchaseLottos();
    await this.getWinningNumbers();
    await this.getBonusNumber();
    this.checkWinningStatics(this.lottoNumbers);
  }
}

export default App;
