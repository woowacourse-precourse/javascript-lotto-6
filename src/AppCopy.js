import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { validatePurchaseFormat } from "./validation/validation.js";
import { INPUT_MSG } from "./constants/InputMessage.js";
import { ERROR_MSG } from "./constants/ErrorMessage.js";
import { matchingCounts } from "./constants/ResultMessage.js";

class App {
  #generatedLottoNums;

  constructor() {
    this.ticketsAmount = 0;
    this.matchingTotalNumber = 0;
    this.matchingTickets = 0;
    this.#generatedLottoNums = [];
    this.inputedLottoNums = [];
  }
  async play() {
    await this.purchaseTicket();
    await this.generateNumbers();
    await this.inputLotteryResults();
    // await this.inputBonusNumber();
    // this.matchingNumbers(this.#generatedLottoNums, this.inputedLottoNums);
    // console.log(this.matchingTotalNumber, "matching total number");
    // console.log(this.matchingTickets, "matching tickets ");
  }

  async purchaseTicket() {
    const ticketsAmount = await Console.readLineAsync(INPUT_MSG.amount);
    validatePurchaseFormat(ticketsAmount);

    this.ticketsAmount = Math.floor(ticketsAmount / 1000);
    await Console.print(`${this.ticketsAmount}개를 구매했습니다.`);
  }
  async generateNumbers() {
    for (let i = 0; i < this.ticketsAmount; i++) {
      const lottoNums = await Random.pickUniqueNumbersInRange(1, 45, 6);
      const stringifyNums = `[${lottoNums.join(", ")}]`;
      if (lottoNums.length > 6) {
        throw new Error("[ERROR]");
      }

      this.#generatedLottoNums.push(lottoNums);
      await Console.print(stringifyNums);
      // this.#generatedLottoNums = this.#generatedLottoNums.concat(lottoNums);
    }

    // this.matchingNumbers(this.#generatedLottoNums, this.inputedLottoNums);
  }
  async inputLotteryResults() {
    const results = await Console.readLineAsync(INPUT_MSG.results);
    const resultsArray = results.split(",").map(Number);
    const validateNums = new Lotto(resultsArray);

    // console.log(resultsArray, "inputed results");
    this.inputedLottoNums = this.inputedLottoNums.concat(resultsArray);

    // this.inputedLottoNums.push(resultsArray);
    Console.print(resultsArray);
  }

  async inputBonusNumber() {
    let bonus = await Console.readLineAsync(INPUT_MSG.bonusNum);
    if (bonus < 0 || bonus > 45) {
      throw new Error(ERROR_MSG.input);
    } else if (!Number.isInteger(Number(bonus))) {
      throw new Error(ERROR_MSG.integer);
    } else {
      Console.print(bonus);
    }
  }

  // matchingNumbers(inputed) {
  //   let printedHeader = false;
  //   const results = [];
  //   for (let j = 0; j < this.#generatedLottoNums.length; j++) {
  //     const generated = this.#generatedLottoNums[j];
  //     let matchCount = 0;
  //     for (let i = 0; i < inputed.length; i++) {
  //       if (generated.includes(inputed[i])) {
  //         matchCount++;
  //       }
  //     }
  //     // Console.print(`Matching numbers for Ticket ${j + 1}: ${matchCount}`);

  //     if (matchCount >= 3) {
  //       matchingCounts[matchCount]++;
  //     }

  //     for (let count of [3, 4, 5, 6]) {
  //       results.push(`${count}개 일치 (금액) - ${matchingCounts[count]}개`);
  //     }

  //     const totalMatchingTickets = Object.values(matchingCounts).reduce(
  //       (a, b) => a + b,
  //       0
  //     );
  //     const totalRevenueRate =
  //       (totalMatchingTickets / this.#generatedLottoNums.length) * 100;

  //     if (!printedHeader) {
  //       Console.print(`당첨 통계\n---`);
  //       printedHeader = true;
  //     }

  //     Console.print(results.join("\n"));
  //     Console.print(`총 수익률은 ${totalRevenueRate}% 입니다.`);
  //   }
  // }
}

export default App;
