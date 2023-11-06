import { Console, Random } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "./constants/InputMessage.js";
import {
  validateInputResults,
  validatePurchaseFormat,
  validateResultsLength,
} from "./validation/validation.js";

class Lotto {
  // #numbers;

  // constructor(numbers) {
  //   this.#validate(numbers);
  //   this.#numbers = numbers;
  // }

  async play() {
    const playLotto = new PurchaseLottery();
    await playLotto.purchaseTicket();
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  // TODO: 추가 기능 구현
}

class PurchaseLottery {
  async purchaseTicket() {
    let ticketsAmount = await Console.readLineAsync(INPUT_MSG.amount);
    validatePurchaseFormat(ticketsAmount);

    ticketsAmount = Math.floor(ticketsAmount / 1000);

    const lottoNumbers = new LotteryNumbers();
    await lottoNumbers.generateNumbers(ticketsAmount);
    await lottoNumbers.inputLotteryResults();
  }
}

class LotteryNumbers {
  async generateNumbers(ticketQuantity) {
    for (let i = 0; i < ticketQuantity; i++) {
      const lottoNums = await Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(lottoNums);
    }
  }

  async inputLotteryResults() {
    const results = await Console.readLineAsync(INPUT_MSG.results);
    const resultsArray = results.split(",").map(Number);
    validateResultsLength(resultsArray);

    resultsArray.map((num) => {
      validateInputResults(num, resultsArray);
    });
    Console.print(resultsArray);
  }
}

const playLotto = new Lotto();
playLotto.play();

export default Lotto;
