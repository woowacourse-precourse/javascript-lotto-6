import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

class App {
  purchaseAmount = 0;
  lottos = [];
  winningNumbers = [];
  bonusNumber = 0;

  async inputPurchaseAmount() {
    const inputPurchaseAmount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    const purchaseAmount = Number(inputPurchaseAmount);
    App.validatePurchaseAmount(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  static validatePurchaseAmount(purchaseAmount) {
    if (Number.isNaN(purchaseAmount))
      throw new Error("[ERROR] 구매 금액은 숫자여야 합니다.");
    if (purchaseAmount % 1000)
      throw new Error("[ERROR] 구매 금액은 1,000원 단위여야 합니다.");
  }

  static generateLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedLottoNumbers = lottoNumbers.sort((a, b) => a - b);
    return sortedLottoNumbers;
  }

  purchaseLotto() {
    let lottoAmount = this.purchaseAmount / 1000;
    MissionUtils.Console.print(`${lottoAmount}개를 구매했습니다.`);
    for (let i = 1; i <= lottoAmount; i++) {
      const lottoNumbers = App.generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      lotto.printLottoNumbers();
      this.lottos.push(lotto);
    }
  }

  static validateWinningNumbers(winningNumbers) {
    if (winningNumbers.some((number) => Number.isNaN(number)))
      throw new Error("[ERROR] 입력된 당첨 번호는 숫자여야 합니다.");
    if (winningNumbers.length !== 6)
      throw new Error("[ERROR] 입력된 당첨 번호는 6개여야 합니다.");
    if (winningNumbers.some((number) => number > 45 || number < 1))
      throw new Error(
        "[ERROR] 입력된 당첨 번호는 1부터 45 사이의 숫자여야 합니다."
      );
    if ([...new Set(winningNumbers)].length !== 6)
      throw new Error("[ERROR] 입력된 당첨 번호는 중복되지 않아야 합니다.");
  }

  validateBonusNumber(bonusNumber) {
    if (Number.isNaN(bonusNumber))
      throw new Error("[ERROR] 입력된 보너스 번호는 숫자여야 합니다.");
    if (bonusNumber > 45 || bonusNumber < 1)
      throw new Error(
        "[ERROR] 입력된 보너스 번호는 1부터 45 사이의 숫자여야 합니다."
      );
    if (this.winningNumbers.includes(bonusNumber))
      throw new Error(
        "[ERROR] 입력된 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
  }

  async inputWinningNumbers() {
    const inputWinningNumbers = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    const winningNumbers = inputWinningNumbers.split(",").map(Number);
    App.validateWinningNumbers(winningNumbers);
    this.winningNumbers = winningNumbers.sort((a, b) => a - b);
  }

  async inputBonusNumber() {
    const inputBonusNumber = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    const bonusNumber = Number(inputBonusNumber);
    this.validateBonusNumber(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  async play() {
    await this.inputPurchaseAmount();
    this.purchaseLotto();
    await this.inputWinningNumbers();
  }
}

export default App;
