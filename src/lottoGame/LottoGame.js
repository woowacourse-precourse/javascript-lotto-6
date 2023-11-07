import { Console } from "@woowacourse/mission-utils";
import Lotto from "../lotto/Lotto.js";
import LottoUtils from "./lottoUtils.js";
import { COMMAND, LOTTO_RANK, LOTTO_GAME_RULE } from "../utils/constants.js";

class LottoGame {
  #purchasedAmount;
  #purchasedLottos;
  #winningNumbers;
  #bonusNumber;
  #rank;

  constructor() {
    this.#purchasedAmount = 0;
    this.#purchasedLottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 1;
    this.#rank = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
  }

  generateLotto(amount) {
    this.#purchasedAmount = amount;

    for (
      let i = 0;
      i < this.#purchasedAmount / LOTTO_GAME_RULE.lottoAmout;
      i++
    ) {
      const lottoNumbers = LottoUtils.generateRandomNumber();
      this.#purchasedLottos.push(new Lotto(lottoNumbers));
    }

    this.printPurchasedLottos();
  }

  printPurchasedLottos() {
    Console.print(
      `${this.#purchasedAmount / LOTTO_GAME_RULE.lottoAmout}${
        COMMAND.purchaseMessage
      }`
    );

    this.#purchasedLottos.forEach((lotto) => {
      const sortedNumbers = LottoUtils.ascendingSort(lotto.getNumbers());
      Console.print(`[${sortedNumbers.join(", ")}]`);
    });
  }

  setWinningNumbers(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  updateRank(sameNumbers) {
    switch (sameNumbers.length) {
      case 6:
        this.#rank.firstPlace++;
        break;
      case 5:
        if (sameNumbers.includes(this.#bonusNumber)) {
          this.#rank.secondPlace++;
        } else {
          this.#rank.thirdPlace++;
        }
        break;
      case 4:
        this.#rank.fourthPlace++;
        break;
      case 3:
        this.#rank.fifthPlace++;
        break;
      default:
        break;
    }
  }

  calculateWinner() {
    this.#purchasedLottos.forEach((lotto) => {
      const sameNumbers = lotto
        .getNumbers()
        .filter((number) => this.#winningNumbers.includes(number));

      this.updateRank(sameNumbers);
    });

    this.printWinner();
  }

  getRankName(rank) {
    return LOTTO_RANK.rankNames[rank];
  }

  calculateProfitRate() {
    let totalProfit = 0;
    LOTTO_GAME_RULE.prize.forEach((amount, index) => {
      totalProfit += amount * this.#rank[`${this.getRankName(index)}Place`];
    });

    const profitRate = (totalProfit / this.#purchasedAmount) * 100;

    return profitRate.toFixed(1);
  }

  printWinner() {
    Console.print(`${LOTTO_RANK.startMessage}`);
    LOTTO_RANK.rankResultMessage.forEach((message, index) => {
      Console.print(
        `${message} - ${this.#rank[`${this.getRankName(index)}Place`]}개`
      );
    });
    Console.print(`총 수익률은 ${this.calculateProfitRate()}%입니다.`);
  }
}

export default LottoGame;
