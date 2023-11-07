import { MissionUtils } from "@woowacourse/mission-utils";
import GetPurchaseAmount from "./GetPurchaseAmount.js";
import GetBonusNumber from "./GetBonusNumber.js";
import Lotto from "./Lotto.js";

const UNIT_OF_PURCHASE = 1000;

class App {
  async getPurchaseAmount() {
    try {
      const purchaseInput = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n",
      );
      const checkPurchaseInput = new GetPurchaseAmount(purchaseInput);
      const getPurchaseInput = checkPurchaseInput.getPurchaseAmount();

      return getPurchaseInput;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return await this.getPurchaseAmount();
    }
  }

  getRandomLottoNumbers(purchaseNumber) {
    const lottoNumbers = [];
    for (let i = 0; i < purchaseNumber; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = numbers.sort((a, b) => a - b);
      lottoNumbers.push(sortedNumbers);
    }

    return lottoNumbers;
  }

  printPurchaseLottos(purchaseNumber, lottoNumbers) {
    MissionUtils.Console.print(`\n${purchaseNumber}개를 구매했습니다.`);
    lottoNumbers.forEach((lottoNumber) =>
      MissionUtils.Console.print(lottoNumber),
    );
    MissionUtils.Console.print("");
  }

  async getWinningNumbers() {
    try {
      const winningNumbers = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n",
      );
      const checkWinningNumbers = new Lotto(winningNumbers);
      const getWinningNumber = checkWinningNumbers.getNumbers();

      return getWinningNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return await this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumber) {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n",
      );
      const checkBonusNumber = new GetBonusNumber(winningNumber, bonusNumber);
      const getBonusNumber = checkBonusNumber.getBonusNumber();

      return getBonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return await this.getBonusNumber(winningNumber);
    }
  }

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const purchaseNumber = purchaseAmount / UNIT_OF_PURCHASE;
    const getLottoNumbers = this.getRandomLottoNumbers(purchaseNumber);

    this.printPurchaseLottos(purchaseNumber, getLottoNumbers);

    const winningNumber = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumber);
  }
}

export default App;
