import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./utils/Constants.js";
import Lotto from "./Lotto.js";
import validation from "./utils/validation.js";

class LottoManager {
  constructor(lottoTickets) {
    this.myLottoNumbers = null;
    this.count = null;
    this.lottoTickets = lottoTickets;
    this.bonusNumber = null;
  }

  makeLottoAndPrint() {
    this.count = 0;
    while (this.count < this.lottoTickets) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      const sortedNumbers = randomNumbers.sort((a, b) => a - b);
      if (this.count === 0) {
        this.myLottoNumbers = [sortedNumbers];
      } else {
        this.myLottoNumbers = [...this.myLottoNumbers, sortedNumbers];
      }
      const sorted = sortedNumbers.join(", ");
      MissionUtils.Console.print("[" + sorted + "]");
      this.count++;
    }
  }

  async runLottoWithNumbers() {
    await this.setWinningNumbers();
    const lotto = new Lotto(this.winningNumbers);
    await this.setBonusNumber();
    return lotto;
  }

  async setWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(
      MESSAGE.INPUT.WINNING_NUMBERS,
    );
    this.winningNumbers = input.split(",").map((item) => parseInt(item));
  }

  async setBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      MESSAGE.INPUT.BONUS_NUMBER,
    );
    this.bonusNumber = parseInt(input);
    await this.#validateBonusNumber(parseInt(this.bonusNumber));
  }

  #validateBonusNumber() {
    validation.isValidInputCount([this.bonusNumber], 1);
    validation.isValidRange(this.bonusNumber);
    validation.hasSameNumber([...this.winningNumbers, this.bonusNumber]);
    validation.isValidNumber(this.bonusNumber);
  }

  get BonusNumber() {
    return this.bonusNumber;
  }

  get MyLottoNumbers() {
    return this.myLottoNumbers;
  }
}

export default LottoManager;
