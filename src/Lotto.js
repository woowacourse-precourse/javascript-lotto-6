import { Console } from "@woowacourse/mission-utils";
import PrintOutput from "./PrintOutput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async start() {
    this.bonusNum = await this.getBonusNum();
    await this.print();
  }

  // getSixNum = async () => {
  //   let sixNum;
  //   do {
  //     try {
  //       sixNum = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  //       sixNum = this.#validate(sixNum);
  //     } catch(error) {
  //       throw new Error(error.message);
  //     }
  //   } while(!sixNum);

  //   return sixNum;
  // };

  getBonusNum = async () => {
    do {
      try {
        let bonusNum = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        bonusNum = this.#validateBonusNum(bonusNum);
      } catch(error) {
        throw new Error(error.message);
      }
    } while(!bonusNum);

    return bonusNum;
  };

  print = async () => {
    PrintOutput.calculateWinningDetails(this.sixNum, this.bonusNum);
    PrintOutput.printWinningDetails();
    PrintOutput.printTotalReturn();
  }

  #hasDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)];
    return numbers.length !== uniqueNumbers.length;
  };

  #validate(numbers) {
    if (!Array.isArray(numbers))
      throw new Error("[ERROR] 콤마(,)로 구분해야 합니다.");
    if (numbers.some(num => Number.isNaN(num)))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (this.#hasDuplicates(numbers))
      throw new Error("[ERROR] 서로 다른 숫자를 입력해야 합니다.");
    if (numbers.some(num => num <= 0 || num >= 46))
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (numbers.some(num => num >= 1 && num <= 45 && Number.isInteger(num)) === false)
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
    return numbers;
  }

  #validateBonusNum(numbers, bonusNum) {
    if (Array.isArray(bonusNum))
      throw new Error("[ERROR] 숫자는 1개만 입력해야 합니다.");
    if (Number.isNaN(bonusNum))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (numbers.includes(bonusNum))
      throw new Error("[ERROR] 6개의 당첨 번호 이외의 숫자를 입력해야 합니다.");
    if (bonusNum <= 0 || bonusNum >= 46)
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (bonusNum >= 1 && bonusNum <= 45 && Number.isInteger(bonusNum) === false)
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
    return bonusNum;
  }
}

export default Lotto;