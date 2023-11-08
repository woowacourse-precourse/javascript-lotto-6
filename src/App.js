import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    try {
      const purchaseAmount = await this.getPurchaseAmount();
      const lottoCount = Math.floor(purchaseAmount / 1000);

      if (lottoCount < 1) {
        console.error("[ERROR] 최소 구매 금액은 1,000원입니다.");
        return;
      }

      const userLottoNumbers = this.getUserLottoNumbers(lottoCount);
      const winningNumbers = await this.getWinningNumbers();
      const bonusNumber = await this.getBonusNumber();

      this.printPurchasedLotto(userLottoNumbers);

      const results = this.checkResults(
        userLottoNumbers,
        winningNumbers,
        bonusNumber
      );
      this.printResults(results, logSpy);
    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
    }
  }

  async getPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    return parseInt(input);
  }

  getUserLottoNumbers(lottoCount) {
    const userLottoNumbers = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      userLottoNumbers.push(new Lotto(numbers));
    }

    return userLottoNumbers;
  }

  async getWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    return input.split(",").map((number) => parseInt(number));
  }

  async getBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    return parseInt(input);
  }

  printPurchasedLotto(userLottoNumbers) {
    console.log(`${userLottoNumbers.length}개를 구매했습니다.`);
    userLottoNumbers.forEach((lotto) => {
      console.log(lotto.toString());
    });
  }

  checkResults(userLottoNumbers, winningNumbers, bonusNumber) {
    // 로또 번호를 비교하여 결과 계산
    // 결과를 반환
  }

  printResults(results, logSpy) {
    // 결과 출력
  }
}

const app = new App();
app.play();
