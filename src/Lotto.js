import { Console } from "@woowacourse/mission-utils";
import PrintOutput from "./PrintOutput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async start(validPrice) { 
    let validNumbers = 0;  
    validNumbers = this.#validate(this.#numbers); 
    while(validNumbers === 0) {
      let sixNum = await Console.readLineAsync("당첨 번호를 다시 입력해 주세요.\n");
      validNumbers = this.#validate(sixNum);
    }
    const validBonusNum = await this.getBonusNum();

    const printOutput = new PrintOutput();
    const winningArray = await printOutput.calculateWinningDetails(validNumbers, validBonusNum, printOutput.lottoNumSets);
    await printOutput.printWinningDetails(winningArray);
    await printOutput.printTotalReturn(winningArray, validPrice);
  }

  hasDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)];
    return numbers.length !== uniqueNumbers.length;
  };

  #validate(numbers) {
    numbers = numbers.split(",").map(str => str.trim()).map(Number);
    if (!Array.isArray(numbers))
      throw new Error("[ERROR] 콤마(,)로 구분해야 합니다.");
    if (numbers.some(num => Number.isNaN(num)))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (this.hasDuplicates(numbers))
      throw new Error("[ERROR] 서로 다른 숫자를 입력해야 합니다.");
    if (numbers.some(num => num <= 0 || num >= 46))
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (numbers.some(num => num >= 1 && num <= 45 && Number.isInteger(num)) === false)
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
    return numbers;
  };

  getBonusNum = async () => {
    let bonusNum;
    let validBonusNum = 0;
    do {
      try {
        bonusNum = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        validBonusNum = this.validateBonusNum(this.#numbers, bonusNum);
      } catch(error) {
        throw new Error(error.message);
      }
    } while(validBonusNum === 0);
    return validBonusNum;
  };

  validateBonusNum(sixNum, bonusNum) {
    if (bonusNum.includes(","))
      throw new Error("[ERROR] 숫자는 1개만 입력해야 합니다.");
    sixNum = sixNum.split(",").map(str => str.trim()).map(Number);
    bonusNum = parseInt(bonusNum);
    if (Number.isNaN(bonusNum))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (sixNum.includes(bonusNum))
      throw new Error("[ERROR] 6개의 당첨 번호 이외의 숫자를 입력해야 합니다.");
    if (bonusNum <= 0 || bonusNum >= 46)
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (bonusNum >= 1 && bonusNum <= 45 && Number.isInteger(bonusNum) === false)
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
    return bonusNum;
  };
}

export default Lotto;