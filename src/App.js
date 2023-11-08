import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottos = this.makeLottos(purchaseAmount);
    this.printLottos(lottos);
    const winningNumbers = await this.getFullWinningNumbers();
  }
  async getPurchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return parseInt(purchaseAmount);
  }
  makeLottos(purchaseAmount) {
    const lottoCount = parseInt(purchaseAmount / 1000);
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }
  printLottos(lottos) {
    MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
    for (const lotto of lottos) {
      MissionUtils.Console.print(lotto.getNumbers());
    }
  }
  async getFullWinningNumbers() {
    const formattingWinningNumbers = await this.getWinningNumbers();
    const formattingFullWinningNumbers = await this.getBonusNumber(
      formattingWinningNumbers
    );

    return formattingFullWinningNumbers;
  }
  async getWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      "지난 주 당첨 번호를 입력해 주세요.\n"
    );
    const formattingWinningNumbers = this.isValidWinningNumbers(
      winningNumbers.split(",").map((num) => parseInt(num)),
      6
    );
    return formattingWinningNumbers;
  }
  async getBonusNumber(formattingWinningNumbers) {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const formattingFullWinningNumbers = [
      ...formattingWinningNumbers,
      parseInt(bonusNumber),
    ];
    return this.isValidWinningNumbers(formattingFullWinningNumbers, 7);
  }

  isValidWinningNumbers(numbers, lotttoLength) {
    if (numbers.every((num) => !isNaN(num)) === false) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (numbers.length !== lotttoLength) {
      throw new Error(`[ERROR] 로또 번호는 ${lotttoLength}개여야 합니다.`);
    }
    if (new Set(numbers).size !== lotttoLength) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
    }
    return numbers;
  }
}

export default App;
