import { Console, Random } from "@woowacourse/mission-utils";
import GetPurchaseAmount from "./GetPurchaseAmount.js";
import GetBonusNumber from "./GetBonusNumber.js";
import Lotto from "./Lotto.js";
import {
  INPUT_BONUS_NUMBER,
  INPUT_PRIZE_NUMBER,
  INPUT_PURCHASE_AMOUNT,
} from "./constants/index.js";

class App {
  async getPurchaseAmount() {
    try {
      const purchaseInput = await Console.readLineAsync(INPUT_PURCHASE_AMOUNT);
      const checkPurchaseInput = new GetPurchaseAmount(purchaseInput);
      const getPurchaseInput = checkPurchaseInput.getPurchaseAmount();

      return getPurchaseInput;
    } catch (error) {
      Console.print(error.message);

      return await this.getPurchaseAmount();
    }
  }

  getRandomLottoNumbers(purchaseNumber) {
    const lottoNumbers = [];
    for (let i = 0; i < purchaseNumber; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = numbers.sort((a, b) => a - b);
      lottoNumbers.push(sortedNumbers);
    }

    return lottoNumbers;
  }

  printPurchaseLottos(purchaseNumber, lottoNumbers) {
    Console.print(`\n${purchaseNumber}개를 구매했습니다.`);
    lottoNumbers.forEach((lottoNumber) => Console.print(lottoNumber));
    Console.print("");
  }

  async getWinningNumbers() {
    try {
      const winningNumbers = await Console.readLineAsync(INPUT_PRIZE_NUMBER);
      const winningNumbersArray = winningNumbers.split(",");
      const checkWinningNumbers = new Lotto(winningNumbersArray);

      return winningNumbersArray;
    } catch (error) {
      Console.print(error.message);

      return await this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumber) {
    try {
      const bonusNumber = await Console.readLineAsync(INPUT_BONUS_NUMBER);
      const checkBonusNumber = new GetBonusNumber(winningNumber, bonusNumber);
      const getBonusNumber = checkBonusNumber.getBonusNumber();

      return getBonusNumber;
    } catch (error) {
      Console.print(error.message);

      return await this.getBonusNumber(winningNumber);
    }
  }

  isHit(lottoNumber, winningNumber, bonusNumber) {
    let hit = 0;
    let bonusHit = false;

    winningNumber.forEach((winningNumber) => {
      if (lottoNumber.includes(Number(winningNumber))) hit++;
    });

    if (lottoNumber.includes(Number(bonusNumber))) {
      bonusHit = true;
    }

    return { hit, bonusHit };
  }

  handleWinningResult(hit, bonusHit, winningResult) {
    if (hit === 3) winningResult[0] += 1;
    else if (hit === 4) winningResult[1] += 1;
    else if (hit === 5 && !bonusHit) winningResult[2] += 1;
    else if (hit === 5 && bonusHit) winningResult[3] += 1;
    else if (hit === 6) winningResult[4] += 1;

    return winningResult;
  }

  printWinningStatics(winningResult) {
    Console.print("\n당첨 통계\n---");
    winningResult.forEach((result, index) => {
      if (index === 3) {
        Console.print(
          `5개 일치, 보너스 볼 일치 (${WINNING_PRICE[index]}원) - ${result}개`,
        );

        return;
      }

      Console.print(
        `${index === 4 ? index + 2 : index + 3}개 일치 (${
          WINNING_PRICE[index]
        }원) - ${result}개`,
      );
    });
  }

  calculateTotalYield(purchaseAmount, winningResult) {
    let total = 0;
    winningResult.forEach(
      (result, index) =>
        (total += result * Number(WINNING_PRICE[index].replaceAll(",", ""))),
    );

    const totalYield = (total / Number(purchaseAmount)) * 100;

    Console.print(`총 수익률은 ${totalYield.toFixed(1)}%입니다.`);
  }

  checkWinningStatics(
    purchaseAmount,
    lottoNumbers,
    winningNumber,
    bonusNumber,
  ) {
    let winningResult = [0, 0, 0, 0, 0];

    lottoNumbers.forEach((lottoNumber) => {
      const { hit, bonusHit } = this.isHit(
        lottoNumber,
        winningNumber,
        bonusNumber,
      );

      winningResult = this.handleWinningResult(hit, bonusHit, winningResult);
    });

    this.printWinningStatics(winningResult);
    this.calculateTotalYield(purchaseAmount, winningResult);
  }

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const purchaseNumber = purchaseAmount / UNIT_OF_PURCHASE;
    const lottoNumbers = this.getRandomLottoNumbers(purchaseNumber);

    this.printPurchaseLottos(purchaseNumber, lottoNumbers);

    const winningNumber = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumber);
    this.checkWinningStatics(
      purchaseAmount,
      lottoNumbers,
      winningNumber,
      bonusNumber,
    );
  }
}

export default App;
