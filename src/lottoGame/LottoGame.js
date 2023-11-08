import { Console } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import WinningLotto from "../WinningLotto.js";
import LottoUtils from "./LottoUtils.js";
import { COMMAND, LOTTO_RANK, LOTTO_GAME_RULE } from "../utils/constants.js";

class LottoGame {
  #purchasedAmount;
  #purchasedLottos;
  #winningLotto;
  #rank;

  constructor() {
    this.#purchasedAmount = 0;
    this.#purchasedLottos = [];
    this.#rank = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
  }

  generateRandomLotto(amount) {
    this.#purchasedAmount = amount;

    for (
      let i = 0;
      i < this.#purchasedAmount / LOTTO_GAME_RULE.lottoAmount;
      i++
    ) {
      const lottoNumbers = LottoUtils.generateRandomNumber();
      this.#purchasedLottos.push(new Lotto(lottoNumbers));
    }

    this.printPurchasedLottos();
  }

  generateWinnigLotto(numbers) {
    this.#winningLotto = new WinningLotto(numbers);
  }

  setLottoBonusNumber(number) {
    this.#winningLotto.setBonusNumber(number);
  }

  printPurchasedLottos() {
    Console.print("\n");
    Console.print(
      `${this.#purchasedAmount / LOTTO_GAME_RULE.lottoAmount}${
        COMMAND.purchaseMessage
      }`
    );

    this.#purchasedLottos.forEach((lotto) => {
      const sortedNumbers = LottoUtils.ascendingSort(lotto.getNumbers());
      Console.print(`[${sortedNumbers.join(", ")}]`);
    });
  }

  updateRank(sameNumbers, lottoNumbers) {
    switch (sameNumbers.length) {
      case 6:
        this.#rank.firstPlace++;
        break;
      case 5:
        if (lottoNumbers.includes(this.#winningLotto.getBonusNumber())) {
          this.#rank.secondPlace++;
          break;
        }
        this.#rank.thirdPlace++;
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
    const WinningLottoNumbers = this.#winningLotto.getNumbers();

    this.#purchasedLottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();

      const sameNumbers = lottoNumbers.filter((number) =>
        WinningLottoNumbers.includes(number)
      );

      this.updateRank(sameNumbers, lottoNumbers);
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

    return Number(profitRate.toFixed(1));
  }

  printWinner() {
    Console.print("\n");
    Console.print(`${LOTTO_RANK.startMessage}`);
    LOTTO_RANK.rankResultMessage.forEach((message, index) => {
      Console.print(
        `${message} - ${this.#rank[`${this.getRankName(index)}Place`]}개`
      );
    });

    const totalProfitRate = this.calculateProfitRate().toLocaleString("ko-KR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    Console.print(`총 수익률은 ${totalProfitRate}%입니다.`);
  }
}

export default LottoGame;
