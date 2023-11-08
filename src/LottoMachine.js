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
  #amount = 0;

  constructor() {
    this.#initializeMatched();
  }

  /**
   * 당첨 번호를 설정 한다.
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  setWinningNumbers(winningNumbers, bonusNumber) {
    this.#validationWinning(winningNumbers, bonusNumber);
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  /**
   * 주어진 돈으로 로또를 구매한다
   *  - 입력받은 money가 숫자인지 검증을 한다.
   * 생성한 로또 클래스의 티켓 배열을 반환한다.
   * @param {number} money
   * @returns {Lotto[]}
   */
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

  /**
   * 로또 추첨 결과를 출력한다.
   * @param {Lotto[]} ticketList
   */
  announceResults(ticketList) {
    let print = PRINT_MESSAGE.RESULT.TITLE;
    for (const prizeByMatchCount of SETTING.PRIZE_BY_MATCH_COUNT) {
      const count = this.#matchedNumber[prizeByMatchCount.MATCH_NUMBER].count;
      const matched = prizeByMatchCount.MATCH_NUMBER;
      const prize = prizeByMatchCount.PRIZE;
      this.#amount += prize * count;
      if (prizeByMatchCount.MATCH_BONUS)
        print += PRINT_MESSAGE.RESULT.BONUS({ matched, prize, count });
      if (!prizeByMatchCount.MATCH_BONUS)
        print += PRINT_MESSAGE.RESULT.NUMBER({ matched, prize, count });
    }
    this.#printCalculateYield(ticketList.length * SETTING.LOTTO_PRICE);
    Console.print(print);
  }

  /**
   * 로또 추첨번호와
   * 가지고 있는 로또의 대조 결과를 저장할
   * {matcherNumber} 객체를 초기화 한다.
   */
  #initializeMatched() {
    for (let i = 0; i < SETTING.LOTTO_NUMBER_COUNT; i++) {
      this.#matchedNumber[i + 1] = { count: 0, bonus: 0 };
    }
  }

  /**
   * 당첨 번호가 유효한 숫자인지 검증
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  #validationWinning(winningNumbers, bonusNumber) {
    validateWinningNumbersCountMismatch(winningNumbers);
    validateWinningNumbersNotAllNumbers(winningNumbers);
    validateWinningBonusNumberNotNumbers(bonusNumber);
    validateWinningNumbersOutOfRange([...winningNumbers, bonusNumber]);
    validateWinningNumberIsUniq([...winningNumbers, bonusNumber]);
  }

  /**
   * this.#amount에 저장된 총 수익금과
   * {investment}변수로 받은 투자금으로 수익률을 계산 후
   * 출력한다.
   * @param {number} investment
   */
  #printCalculateYield(investment) {
    Console.print(
      `총 수익률은 ${CalculateYield(this.#amount, investment)}%입니다.`
    );
  }

  /**
   * 입력한 갯수 만큼의 로또를 만든다.
   * @param {number} count
   * @returns {Lotto[]}
   */
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
  checkTicket(ticketList) {
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
