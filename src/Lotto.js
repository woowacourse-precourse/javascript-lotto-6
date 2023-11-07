import { Console } from "@woowacourse/mission-utils";
import PrintOutput from "./PrintOutput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    try {
      this.#validate(numbers);
      this.#numbers = numbers;
    } catch(error) {
      Console.print(error.message);
    }
  }

  async start(validPrice, lottoNumSets) { 
    const validNumbers = await this.checkSixNum();
    const validBonusNum = await this.getBonusNum(validNumbers);
    const printOutput = new PrintOutput();
    await printOutput.print(validNumbers, validBonusNum, lottoNumSets, validPrice);
  }

  hasDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)];
    return numbers.length !== uniqueNumbers.length;
  };

  #validate(numbers) {
    if (numbers.some(num => Number.isNaN(num)))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (this.hasDuplicates(numbers))
      throw new Error("[ERROR] 서로 다른 숫자를 입력해야 합니다.");
    if (numbers.some(num => num <= 0 || num >= 46))
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (numbers.some(num => num >= 1 && num <= 45 && !Number.isInteger(num)))
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
    return numbers;
  };

  checkSixNum = async () => {
    if(Array.isArray(this.#numbers))
      return this.#numbers;
    let validNumbers = 0;
    while(validNumbers === 0 && this.#numbers === undefined) {
      try {
        let sixNum = await Console.readLineAsync("당첨 번호를 다시 입력해 주세요.\n");
        validNumbers = this.#validate(sixNum);
        return validNumbers;
      } catch(error) {
        Console.print(error.message);
      }
    }
  };

  getBonusNum = async (sixNum) => {
    let validBonusNum = 0;
    while(validBonusNum === 0) {
      try {
        let bonusNum = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        validBonusNum = this.validateBonusNum(sixNum, bonusNum);
      } catch(error) {
        Console.print(error.message);
      }
    }
    return validBonusNum;
  };

  validateBonusNum(sixNum, bonusNum) {
    if (bonusNum.includes(","))
      throw new Error("[ERROR] 숫자는 1개만 입력해야 합니다.");
    const bonusNumToInt = parseFloat(bonusNum);
    if (Number.isNaN(bonusNumToInt))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (sixNum.includes(bonusNumToInt))
      throw new Error("[ERROR] 6개의 당첨 번호 이외의 숫자를 입력해야 합니다.");
    if (bonusNumToInt <= 0 || bonusNumToInt >= 46)
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (bonusNumToInt >= 1 && bonusNumToInt <= 45 && !Number.isInteger(bonusNumToInt))
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
    return bonusNumToInt;
  };
}

export default Lotto;