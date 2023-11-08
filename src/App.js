import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, MESSAGE_INPUT, ERROR_MESSAGE, PRIZE } from "./constants/constant.js";

class App {
  constructor() {
    this.userRandomList = [];

    this.winningThree = 0;
    this.winningFour = 0;
    this.winningFive = 0;
    this.winningBonus = 0;
    this.winningSix = 0;

    this.isBonus = false;

    this.pattern = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
  }

  async play() {

    const userMoney = await this.getUserMoney();

    Console.print(MESSAGE_INPUT(userMoney / 1000).COUNT+'\n');
    
    this.makeRandomNumbers();

    const winningNumsList = await this.getWinningNumbers();
    const bonus = await this.getBonus(winningNumsList);

    this.checkWinningResults(winningNumsList, bonus);
  }

  async getUserMoney() {
    try {
      const inputMoney = await Console.readLineAsync(MESSAGE.START);
      
      this.checkInputIsNaN(inputMoney);
      this.checkInputIsNull(inputMoney);
      this.userMoney = Number(inputMoney);
      this.checkRemains();

      return this.userMoney;

    } catch (error) {
      Console.print(ERROR_MESSAGE.INPUT_USERMONEY_ERROR)
      await this.getUserMoney();
    }
  };

  checkRemains() {
    if (this.userMoney % 1000 > 0 || this.userMoney <= 0) {
      throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
    }
  };

  makeRandomNumbers() {
    this.userRandomList = [];
    const randomCount = (this.userMoney / 1000);

    while (this.userRandomList.length < randomCount) {
      const randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNums.sort((a, b) => a - b);
      
      this.checkDuplicateNums(randomNums);
      this.checkListLength(randomNums);
      this.arrayToString(randomNums);
      
      this.userRandomList.push(randomNums);
    }
    return this.userRandomList;
  };

  arrayToString(randomNums) {
    const printedString = `[${randomNums.join(', ')}]`;
    Console.print(printedString)
  }

  checkDuplicateNums(nums) {
    if (nums.length !== new Set(nums).size) {
      throw new Error(ERROR_MESSAGE.INVALID_ERROR);
    }
  }

  async getWinningNumbers() {
    let winningNumsList;

    try {
      const winningNums = await Console.readLineAsync(MESSAGE.WINNING_INPUT);
      winningNumsList = winningNums.split(',').map(Number);
      
      this.checkInputIsNull(winningNums);
      this.checkListLength(winningNumsList);
      this.checkDuplicateNums(winningNumsList);
      this.checkNumsRange(winningNumsList);

      return winningNumsList;

    } catch (error) {
      Console.print(ERROR_MESSAGE.INPUT_ERROR);
      return await this.getWinningNumbers();
    }
  };

  checkInputIsNull(input) {
    if (input === null) {
      throw new Error(ERROR_MESSAGE.INPUT_ERROR);
    }
  };

  checkListLength(list) {
    if (list.length !== 6) {
      throw new Error(ERROR_MESSAGE.INPUT_ERROR)
    }
  };

  checkNumsRange(list) {
    for (let i = 0; i < list.length; i++) {
      if (!this.pattern.test(list[i])) {
        throw new Error(ERROR_MESSAGE.INPUT_ERROR)
      }
    }
  };
  

  async getBonus(winningNumsList) {
    try {
      const inputBonus = await Console.readLineAsync(MESSAGE.BONUS_INPUT);
      
      this.checkInputIsNull(inputBonus);
      this.checkInputIsNaN(inputBonus);
      this.checkNumsRange(Number(inputBonus));
      this.checkIsIncludes(inputBonus, winningNumsList, false);
      
      return Number(inputBonus);

    } catch (error) {
      Console.print(ERROR_MESSAGE.INPUT_ERROR);
      await this.getBonus(winningNumsList);
    }
  };

  checkInputIsNaN(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.INPUT_ERROR);
    }
  };

  checkIsIncludes(input, list, bonusCase) {
    if (list.includes(Number(input))) {
      switch (bonusCase) {
        case false:
          throw new Error(ERROR_MESSAGE.INPUT_ERROR);
        default:
          this.isBonus = true;
      }
    }
  };

  checkWinningResults(winningNumsList, bonus) {
    for (let i = 0; i < this.userRandomList.length; i++) {
      let winningCount = this.userRandomList[i]
      .filter(it => winningNumsList.includes(Number(it))).length

      this.checkIsIncludes(bonus, this.userRandomList[i], true)
      this.calcWinningCount(winningCount);
    }

    Console.print(MESSAGE_INPUT(this.winningThree).RANK_THREE);
    Console.print(MESSAGE_INPUT(this.winningFour).RANK_FOUR);
    Console.print(MESSAGE_INPUT(this.winningFive).RANK_FIVE);
    Console.print(MESSAGE_INPUT(this.winningBonus).RANK_BONUS);
    Console.print(MESSAGE_INPUT(this.winningSix).RANK_SIX);
    
    const rate = this.getRate();
    Console.print(MESSAGE_INPUT(rate).RATE);
  };

  calcWinningCount(winningCount) {
    switch (winningCount) {
      case 3:
        this.winningThree++;
        return;
      case 4:
        if (this.isBonus) {
          this.winningBonus++;
          return;
        }
        this.winningFour++;
      case 5:
        this.winningFive++;
        return;
      case 6:
        this.winningSix++;
        return;
    }
  };

  getRate() {
    const sums = PRIZE.THREE * this.winningThree 
    + PRIZE.FOUR * this.winningFour 
    + PRIZE.FIVE * this.winningFive
    + PRIZE.BONUS * this.winningBonus 
    + PRIZE.SIX * this.winningSix

    this.rate = (sums / this.userMoney*100).toFixed(1);
    return this.rate
  }
}
export default App
