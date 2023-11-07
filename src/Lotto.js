import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!numbers.every((number) => this.isNumberValid(number))) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  isNumberValid(number) {
    return !Number.isNaN(number) && number >= 1 && number <= 45;
  }

  printNumbers() {
    this.sortNumbers();

    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  // checkWinningNumbers(lottoTicket) {
  //   const bonusNumberManager = new BonusNumber(bonusNumber);
  //   const getbonusNumber = bonusNumberManager.getBonusNumber();

  //   let matchingNumbers = 0;
  //   let bonusNumberMatched = false;

  //   for (const lottoNumber of this.#numbers) {
  //     if (lottoTicket.includes(lottoNumber)) {
  //       matchingNumbers++;
  //     }
  //     if (lottoTicket.includes(getbonusNumber)) {
  //       bonusNumberMatched = true;
  //     }
  //   }

  //   return { matchingNumbers, bonusNumberMatched };
  // }

  // calculatePrizeMoney(matchedNumbers, bonusNumberMatched) {
  //   if (matchedNumbers === 6) {
  //     return 2000000000;
  //   } else if (matchedNumbers === 5 && bonusNumberMatched === true) {
  //     return 30000000;
  //   } else if (matchedNumbers === 5) {
  //     return 1500000;
  //   } else if (matchedNumbers === 4) {
  //     return 50000;
  //   } else if (matchedNumbers === 3) {
  //     return 5000;
  //   } else {
  //     return 0;
  //   }
  // }
}
export default Lotto;
