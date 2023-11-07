// import ERROR_MESSAGE from "./Constructor/ErrorMessage";
import SETTING from "./Constructor/Setting.js";
import PRINT_MESSAGE from "./Constructor/PrintMessage.js";
import { Random, Console } from "@woowacourse/mission-utils";
import { CalculateYield } from "./Utils.js";
import Lotto from "./Lotto.js";
import {
  validateMoneyReceived,
  validateWinningNumbersCountMismatch,
  validateWinningNumbersNotAllNumbers,
  validateWinningBonusNumberNotNumbers,
  validateWinningNumbersOutOfRange,
  validateWinningNumberIsUniq,
} from "./Validation/LottoMachineValidation.js";

class LottoMachine {
  #winningNumbers = [];
  #bonusNumber;
  #matchedNumber = {};

  constructor() {
    this.#initializeMatched();
  }

  setWinningNumbers(winningNumbers, bonusNumber) {
    validateWinningNumbersCountMismatch(winningNumbers);
    validateWinningNumbersNotAllNumbers(winningNumbers);
    validateWinningBonusNumberNotNumbers(bonusNumber);
    validateWinningNumbersOutOfRange([...winningNumbers, bonusNumber]);
    validateWinningNumberIsUniq([...winningNumbers, bonusNumber]);

    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  buy(money) {
    validateMoneyReceived(money);
    const ticketList = this.#createTicket(money / SETTING.LOTTO_PRICE);
    Console.print(
      "\n" +
        PRINT_MESSAGE.BUY(
          ticketList.length,
          ticketList.map((lottoInstance) => lottoInstance.getNumbers())
        ) +
        "\n"
    );

    return ticketList;
  }

  announceResults(ticketList) {
    this.#checkTicket(ticketList);
    let print = PRINT_MESSAGE.RESULT.TITLE;
    let total = 0;
    for (const prizeByMatchCount of SETTING.PRIZE_BY_MATCH_COUNT) {
      const count = this.#matchedNumber[prizeByMatchCount.MATCH_NUMBER].count;
      const matched = prizeByMatchCount.MATCH_NUMBER;
      const prize = prizeByMatchCount.PRIZE;
      total += prize * count;
      if (prizeByMatchCount.MATCH_BONUS)
        print += PRINT_MESSAGE.RESULT.BONUS({ matched, prize, count });
      if (!prizeByMatchCount.MATCH_BONUS)
        print += PRINT_MESSAGE.RESULT.NUMBER({ matched, prize, count });
    }
    this.#printCalculateYield(total, ticketList.length * SETTING.LOTTO_PRICE);
    Console.print(print);
  }

  #printCalculateYield(prize, investment) {
    Console.print(`총 수익률은 ${CalculateYield(prize, investment)}%입니다.`);
  }

  #initializeMatched() {
    for (let i = 0; i < SETTING.LOTTO_NUMBER_COUNT; i++) {
      this.#matchedNumber[i + 1] = { count: 0, bonus: 0 };
    }
  }

  #createTicket(count) {
    const ticketList = [];
    const [numMin, numMax, numCount] = [
      SETTING.LOTTO_NUMBER_RANGE.MIN,
      SETTING.LOTTO_NUMBER_RANGE.MAX,
      SETTING.LOTTO_NUMBER_COUNT,
    ];
    while (0 < count--) {
      ticketList.push(
        new Lotto(Random.pickUniqueNumbersInRange(numMin, numMax, numCount))
      );
    }
    return ticketList;
  }

  /**
   * 로또 티켓 묶음을 당첨 번호와 대조한다.
   * 대조 내역은 ${this.#matchedNumber} 에 저장된다.
   *
   * @param {[number][number]} ticketList
   */
  #checkTicket(ticketList) {
    for (let ticket of ticketList) {
      const { matchCountNumbers, matchCountBonusNumber } =
        this.#matchTicket(ticket);
      if (matchCountNumbers === 0) continue;
      this.#matchedNumber[matchCountNumbers].count++;

      if (matchCountBonusNumber === 1) {
        this.#matchedNumber[matchCountNumbers].bonus++;
      }
    }
  }

  /**
   * 입력한 복권 번호 6자리가 추첨 번호 중 몇개 맞았는지 리턴하는 함수
   * @param {[number,number,number,number,number,number]} ticket
   * @returns {{ matchCountNumbers:number, matchCountBonusNumber:number}}
   */
  #matchTicket(ticket) {
    let matchCountNumbers = 0;
    let matchCountBonusNumber = 0;
    const numbers = ticket.getNumbers();
    for (let num of numbers) {
      if (this.#winningNumbers.includes(num + "")) {
        matchCountNumbers += 1;
      }
      if (this.#bonusNumber === num) {
        matchCountBonusNumber = 1;
      }
    }
    return { matchCountNumbers, matchCountBonusNumber };
  }
}
export default LottoMachine;
