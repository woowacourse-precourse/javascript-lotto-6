import { ERROR_MSG } from "./constants/ErrorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MSG.length);
    }

    // TODO: 추가 기능 구현
    numbers.map((number) => {
      // results 숫자 검사
      if (isNaN(number)) {
        throw new Error(ERROR_MSG.input);
      }

      // results 범위 검사
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MSG.input);
      }
      // resuls 중복 검사
      if (numbers.filter((n) => n === number).length > 1) {
        throw new Error(ERROR_MSG.overlap);
      }
    });
  }
}

// class PurchaseLottery {
//   async purchaseTicket() {
//     let ticketsAmount = await Console.readLineAsync(INPUT_MSG.amount);
//     validatePurchaseFormat(ticketsAmount);
//     ticketsAmount = Math.floor(ticketsAmount / 1000);
//     Console.print(`${ticketsAmount}개를 구매했습니다.`);

//     const lottoNumbers = new LotteryNumbers();
//     lottoNumbers.generateNumbers(ticketsAmount);
//     lottoNumbers.inputLotteryResults();
//   }
// }

// class LotteryNumbers {
//   async generateNumbers(ticketQuantity) {
//     for (let i = 0; i < ticketQuantity; i++) {
//       const lottoNums = await Random.pickUniqueNumbersInRange(1, 45, 6);
//       if (lottoNums.length > 6) {
//         throw new Error("[ERROR]");
//       }
//       Console.print(lottoNums);
//     }
//   }

//   async inputLotteryResults() {
//     const results = await Console.readLineAsync(INPUT_MSG.results);
//     const resultsArray = results.split(",").map(Number);
//     validateResultsLength(resultsArray);

//     resultsArray.map((num) => {
//       validateInputResults(num, resultsArray);
//     });
//     Console.print(resultsArray);
//   }
// }

// const playLotto = new Lotto();
// playLotto.play();

export default Lotto;
