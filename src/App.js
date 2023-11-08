import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { INPUT_MESSAGES, OUTPUT_MESSAGES } from "./constants/Messages.js";
import { PRIZE } from "./constants/Prize.js";
import { validateWinningNumberCollection } from "./CoreLogic/Validate/WinningNumber.js";
import { validateBonusNumberCollection } from "./CoreLogic/Validate/BonusNumber.js";
import { validateCashCollection } from "./CoreLogic/Cash.js";

class App {
  async play() {
    const INPUT_CASH = await this.validateCash();
    const ARRAY_OF_GAMES = this.pushLottoNumbers(
      this.getGameNumbers(INPUT_CASH)
    );
    const VERIFIED_WINNING_NUMBER = await this.validateWinningNumber();
    const VERIFIED_BOUNUS_NUMBER = await this.validateBonusNumber(
      VERIFIED_WINNING_NUMBER
    );
    const NUMBER_OF_WINS = this.compareLottoNumber(
      ARRAY_OF_GAMES,
      VERIFIED_WINNING_NUMBER,
      VERIFIED_BOUNUS_NUMBER
    );
    this.printLottoResult(NUMBER_OF_WINS, INPUT_CASH);
  }

  async inputCash() {
    const INPUT_CASH = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_CASH_MESSAGE
    );
    return INPUT_CASH;
  }

  async validateCash() {
    while (true) {
      try {
        const INPUT_CASH = await this.inputCash();
        validateCashCollection(INPUT_CASH);
        return INPUT_CASH;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  createLottoNumber() {
    return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  pushLottoNumbers(NUMBER_OF_GAMES) {
    const ARRAY_OF_GAMES = [];
    for (let i = 0; i < NUMBER_OF_GAMES; i++) {
      const EACH_LOTTO_NUMBER = this.createLottoNumber();
      EACH_LOTTO_NUMBER.printLottoNumber();
      ARRAY_OF_GAMES.push(EACH_LOTTO_NUMBER);
    }
    return ARRAY_OF_GAMES;
  }

  getGameNumbers(INPUT_CASH) {
    const NUMBER_OF_GAMES = INPUT_CASH / 1000;
    this.printGameNumbers(NUMBER_OF_GAMES);
    return NUMBER_OF_GAMES;
  }

  printGameNumbers(NUMBER_OF_GAMES) {
    MissionUtils.Console.print(
      NUMBER_OF_GAMES + OUTPUT_MESSAGES.PURCHASE_QUANTITY
    );
  }

  inputWinningNumber() {
    return MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_WINNING_NUMBER
    );
  }

  async validateWinningNumber() {
    while (true) {
      try {
        const WINNING_NUMBER = await this.inputWinningNumber();
        const WINNING_NUMBER_ARRAY = this.getWinningNumberArray(WINNING_NUMBER);
        validateWinningNumberCollection(WINNING_NUMBER_ARRAY);
        return WINNING_NUMBER_ARRAY;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  getWinningNumberArray(WINNING_NUMBER) {
    return WINNING_NUMBER.split(",").map(Number);
  }

  inputBonusNumber() {
    const BOUNUS_NUMBER = MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_BOUNUS_NUMBER
    );
    return BOUNUS_NUMBER;
  }

  async validateBonusNumber(VERIFIED_WINNING_NUMBER) {
    while (true) {
      try {
        const BOUNUS_NUMBER = await this.inputBonusNumber();
        validateBonusNumberCollection(BOUNUS_NUMBER, VERIFIED_WINNING_NUMBER);
        const VERIFIED_BOUNUS_NUMBER =
          this.getNumberTypeBonusNumber(BOUNUS_NUMBER);
        return VERIFIED_BOUNUS_NUMBER;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  getNumberTypeBonusNumber(BOUNUS_NUMBER) {
    return Number(BOUNUS_NUMBER);
  }

  compareLottoNumber(lottoNumber, winningNumber, bonusNumber) {
    let NumberOfWins = { 3: 0, 4: 0, 5: 0, 6: 0, bonus: 0 };
    for (let i = 0; i < lottoNumber.length; i++) {
      let { correctCount, bonusFlag } = lottoNumber[i].compareLottoNumber(
        winningNumber,
        bonusNumber
      );
      if (correctCount !== 5 && correctCount >= 3) NumberOfWins[correctCount]++;
      if (correctCount === 5 && bonusFlag) NumberOfWins["bonus"]++;
      if (correctCount === 5 && !bonusFlag) NumberOfWins[5]++;
    }
    return NumberOfWins;
  }

  printLottoResult(NUMBER_OF_WINS, CASH) {
    const PRIZE_VALUE = this.getPrizeValue(NUMBER_OF_WINS);
    MissionUtils.Console.print(OUTPUT_MESSAGES.WINNING_STATISTICS);
    this.showEachPrize(NUMBER_OF_WINS);
    const RATE_OF_RETURN = this.getRateOfReturn(PRIZE_VALUE, CASH);
    MissionUtils.Console.print(
      OUTPUT_MESSAGES.RATE_OF_RETURN + RATE_OF_RETURN + "%입니다."
    );
  }

  getRateOfReturn(PRIZE_VALUE, CASH) {
    return ((PRIZE_VALUE / CASH) * 100).toFixed(1);
  }

  getPrizeValue(NUMBER_OF_WINS) {
    return (
      NUMBER_OF_WINS[3] * PRIZE.THREE_MATCHES +
      NUMBER_OF_WINS[4] * PRIZE.FOUR_MATCHES +
      NUMBER_OF_WINS[5] * PRIZE.FIVE_MATCHES +
      NUMBER_OF_WINS[6] * PRIZE.SIX_MATCHES +
      NUMBER_OF_WINS["bonus"] * PRIZE.BONUS_MATCHES
    );
  }

  showEachPrize(NUMBER_OF_WINS) {
    this.printEachPrize(OUTPUT_MESSAGES.CORRECT_COUNT_3, NUMBER_OF_WINS[3]);
    this.printEachPrize(OUTPUT_MESSAGES.CORRECT_COUNT_4, NUMBER_OF_WINS[4]);
    this.printEachPrize(OUTPUT_MESSAGES.CORRECT_COUNT_5, NUMBER_OF_WINS[5]);
    this.printEachPrize(
      OUTPUT_MESSAGES.CORRECT_COUNT_BONUS,
      NUMBER_OF_WINS["bonus"]
    );
    this.printEachPrize(OUTPUT_MESSAGES.CORRECT_COUNT_6, NUMBER_OF_WINS[6]);
  }

  printEachPrize(OUTPUT_MESSAGE, NUMBER_OF_WINS) {
    MissionUtils.Console.print(OUTPUT_MESSAGE + NUMBER_OF_WINS + "개");
  }
}
export default App;
