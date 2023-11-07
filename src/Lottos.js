import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  ONE_LOTTO_PRICE,
  LOTTO_RANGE,
  LOTTO_LENGTH,
} from "./constants/numeric.js";
import {
  PROMPT_MESSAGE,
  PROMPT_LOTTO_STATUS_RESULT,
  PROMPT_TOTAL_WINNING_PRICE,
} from "./constants/messages.js";
import {
  validateIsNumber,
  validateMinimumPrice,
  validateCanDivide,
} from "./utils/validator.js";

class Lottos {
  #count = 0;
  #issuedList = [];
  winningPrice = 0;

  constructor(cost) {
    validateIsNumber(cost);
    validateMinimumPrice(cost);
    validateCanDivide(cost);
    this.#generateLottos(cost);
  }

  printIssuedLottos() {
    Console.print(this.#count + PROMPT_MESSAGE.PURCHASE_RESULT);

    this.#issuedList.forEach((lotto) => {
      lotto.printSortedNumbers();
    });
  }

  generateNewLotto() {
    const newNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_RANGE.FROM,
      LOTTO_RANGE.TO,
      LOTTO_LENGTH
    );
    return new Lotto(newNumbers);
  }

  #generateLottos(cost) {
    this.#count = cost / ONE_LOTTO_PRICE;
    const lottoCount = this.#count;

    const newLottos = Array.from({ length: lottoCount }, () =>
      this.generateNewLotto()
    );

    this.#issuedList.push(...newLottos);
  }

  printWinningStatus(winningNumbers, bonusNumber) {
    Console.print(PROMPT_MESSAGE.WINNING_RESULT_HEADER);

    const lottoStatus = this.#issuedList.map((lotto) =>
      lotto.getRank(winningNumbers, bonusNumber)
    );

    this.printLottoStatus(lottoStatus);
    this.generateWinningPrice(lottoStatus);
  }

  printLottoStatus(lottoStatus) {
    let score = new Array(LOTTO_LENGTH).fill(0);

    lottoStatus.forEach((status) => {
      if (status >= 3 && status <= 7) {
        score[status - 3]++;
      }
    });

    Console.print(PROMPT_LOTTO_STATUS_RESULT(score[0]).MATCH_THREE);
    Console.print(PROMPT_LOTTO_STATUS_RESULT(score[1]).MATCH_FOUR);
    Console.print(PROMPT_LOTTO_STATUS_RESULT(score[2]).MATCH_FIVE);
    Console.print(PROMPT_LOTTO_STATUS_RESULT(score[4]).MATCH_FIVE_BONUS);
    Console.print(PROMPT_LOTTO_STATUS_RESULT(score[3]).MATCH_SIX);
  }

  generateWinningPrice(lottoStatus) {
    const winnings = {
      3: 5000,
      4: 50000,
      5: 1500000,
      6: 2000000000,
      7: 30000000, // 보너스 번호 일치
    };

    this.winningPrice = lottoStatus.reduce((acc, status) => {
      return acc + (winnings[status] || 0);
    }, 0);
  }

  printRateOfReturn(cost, winningPrice) {
    const price = (winningPrice / cost) * 100;
    Console.print(PROMPT_TOTAL_WINNING_PRICE(price.toFixed(1)).RESULT);
  }
}

export default Lottos;
