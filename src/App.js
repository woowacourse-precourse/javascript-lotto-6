import { Console, Random } from "@woowacourse/mission-utils";
import Money from "./Money.js";
import GAME_MESSAGES from "./constants/GameMessages.js";
import Lotto from "./Lotto.js";
import ERROR_MESSAGES from "./constants/ErrorMessage.js";
import LOTTO_MESSAGES from "./constants/LottoMessages.js";

class App {
  async play() {
    const money = new Money();
    const userMoney = await money.userMoney();
    const lottoCount = parseInt(userMoney / 1000, 10);
    Console.print(`\n${lottoCount}${GAME_MESSAGES.COUNT_LOTTO}`);
    let lottos = this.generateLottoNumber(lottoCount);
    this.getWinningNumbers(lottos);
  }

  async getWinningNumbers(lottos) {
    const winningNumber = await Console.readLineAsync(
      GAME_MESSAGES.INPUT_WINNING_NUMBER,
    );
    let winningNumberArray = winningNumber
      .split(",")
      .map((x) => parseInt(x, 10));
    let winning = new Lotto(winningNumberArray);
    this.getBonusNumber(lottos, winning);
  }

  async getBonusNumber(lottos, winning) {
    const bonusNumber = await Console.readLineAsync(
      GAME_MESSAGES.INPUT_BONUS_NUMBER,
    );

    if (isNaN(bonusNumber)) throw new Error(ERROR_MESSAGES.IS_BONUS_NUMBER);
    if (winning.getNumber().includes(parseInt(bonusNumber, 10)))
      throw new Error(ERROR_MESSAGES.IS_BONUS_DUPLICATION);
    if (
      bonusNumber < LOTTO_MESSAGES.MIN_LOTTO_NUMBER ||
      bonusNumber > LOTTO_MESSAGES.MAX_LOTTO_NUMBER
    )
      throw new Error(ERROR_MESSAGES.IS_BONUS_RANGE);
    let winningNumber = winning.getNumber();
    this.winningLotto(winningNumber, bonusNumber, lottos);
  }

  winningLotto(winningNumber, bonusNumber, lottos) {
    const winningResultArray = new Array(6).fill(0);
    lottos.map((lotto) => {
      winningResultArray[
        this.isCorrectNumber(winningNumber, bonusNumber, lotto)
      ] += 1;
    });

    Console.print(GAME_MESSAGES.WINNING_STATISTICS);
    this.printWinningResult(winningResultArray);
  }

  printWinningResult(winningResultArray) {
    Console.print(
      `${LOTTO_MESSAGES.COINCIDE_THREE_NUMBER}${winningResultArray[5]}개`,
    );
    Console.print(
      `${LOTTO_MESSAGES.COINCIDE_FOUR_NUMBER}${winningResultArray[4]}개`,
    );
    Console.print(
      `${LOTTO_MESSAGES.COINCIDE_FIVE_NUMBER}${winningResultArray[3]}개`,
    );
    Console.print(
      `${LOTTO_MESSAGES.COINCIDE_FIVE_BONUS_NUMBER}${winningResultArray[2]}개`,
    );
    Console.print(
      `${LOTTO_MESSAGES.COINCIDE_SIX_NUMBER}${winningResultArray[1]}개`,
    );
  }

  isCorrectNumber(winningNumber, bonusNumber, lotto) {
    let count = winningNumber.filter((x) => lotto.includes(x)).length;

    if (count === LOTTO_MESSAGES.SIX_CORRECT) return 1;
    if (count === LOTTO_MESSAGES.FIVE_CORRECT && lotto.includes(bonusNumber))
      return 2;
    if (count === LOTTO_MESSAGES.FIVE_CORRECT) return 3;
    if (
      count === LOTTO_MESSAGES.FOUR_CORRECT ||
      count === LOTTO_MESSAGES.THREE_CORRECT
    )
      return 8 - count;

    return 0;
  }

  generateLottoNumber(lottoCount) {
    let lottos = [lottoCount];
    for (let i = 0; i < lottoCount; i += 1) {
      lottos[i] = Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    for (let i = 0; i < lottos.length; i += 1) {
      lottos[i].sort((a, b) => {
        return a - b;
      });
    }
    this.printLottoNumbers(lottos);
    return lottos;
  }

  printLottoNumbers(lottos) {
    lottos.map((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
    Console.print("\n");
  }
}

export default App;
