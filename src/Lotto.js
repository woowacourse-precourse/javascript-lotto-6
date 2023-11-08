import { Console } from "@woowacourse/mission-utils";
import PrintOutput from "./PrintOutput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async start(validPrice, lottoNumSets) { 
    const validNumbers = await this.checkSixNum();
    const validBonusNum = await this.getBonusNum(validNumbers);
    const printOutput = new PrintOutput();
    await printOutput.print(validNumbers, validBonusNum, lottoNumSets, validPrice);
  }

  #validate(numbers) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (this.hasDuplicates(numbers))
      throw new Error("[ERROR] 서로 다른 숫자를 입력해야 합니다.");
    if (numbers.some(num => this.containsNonNumeric(num)))
      throw new Error("[ERROR] 숫자(정수)를 입력해야 합니다.");
    if (numbers.some(num => num <= 0 || num >= 46))
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    return numbers;
  };

  hasDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)];
    return numbers.length !== uniqueNumbers.length;
  };

  containsNonNumeric = (str) => {
    const nonNumericPattern = /[^0-9]/;
    return nonNumericPattern.test(str);
  };

  checkSixNum = async () => {
    if(Array.isArray(this.#numbers))
      return this.#numbers;
    let validNumbers = 0;
    while(validNumbers === 0 && this.#numbers === undefined) {
      try {
        let sixNum = await Console.readLineAsync("당첨 번호를 다시 입력해 주세요.\n");
        validNumbers = this.#validate(sixNum);
      } catch(error) {
        Console.print(error.message);
      }
    }
    return validNumbers;
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
    if (this.containsNonNumeric(bonusNum))
      throw new Error("[ERROR] 숫자(정수)를 입력해야 합니다.");
    const bonusNumToInt = parseInt(bonusNum);
    if (sixNum.includes(bonusNumToInt))
      throw new Error("[ERROR] 6개의 당첨 번호 이외의 숫자를 입력해야 합니다.");
    if (bonusNumToInt <= 0 || bonusNumToInt >= 46)
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    return bonusNumToInt;
  };
}

export default Lotto;