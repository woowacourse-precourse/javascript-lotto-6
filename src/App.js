import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";
import { MESSAGE, MESSAGE_INPUT, ERROR_MESSAGE, PRIZE } from "./constants/constant.js";

class App {
  constructor() {
    this.userRandomList = [];
    this.winningThree = 0;
    this.winningFour = 0;
    this.winningFive = 0;
    this.winningBonus = 0;
    this.winningSix = 0;
  }

  async play() {

    const userMoney = await this.getUserMoney();

    Console.print(MESSAGE_INPUT(userMoney / 1000).COUNT+'\n');
    
    this.makeRandomNumbers();

    const numRangePattern = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
    const winningNumsList = await this.getWinningNumbers(numRangePattern);

    const bonus = await this.getBonus(winningNumsList, numRangePattern);
    this.checkWinningResults(this.userMoney, winningNumsList, bonus);
  }

  async getUserMoney() {
    try {
      const inputMoney = await Console.readLineAsync(MESSAGE.START);
      
      if (isNaN(inputMoney) || inputMoney === null) {
        throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
      }
      this.userMoney = Number(inputMoney)
      if (this.userMoney % 1000 > 0 || this.userMoney <= 0) {
        throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
      }
      return this.userMoney;
    } catch (error) {
      Console.print(ERROR_MESSAGE.INPUT_USERMONEY_ERROR)
      await this.getUserMoney();
    }
  };

  makeRandomNumbers() {
    this.userRandomList = []; // 배열 초기화
    const randomCount = (this.userMoney / 1000);

    while (this.userRandomList.length < randomCount) {
      let randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNums.sort((a, b) => a - b); // 오름차순 정렬
      
      if (randomNums.length !== new Set(randomNums).size) {
        throw new Error(ERROR_MESSAGE.INVALID_ERROR);
      }

      let randomNumsString = String(randomNums);
      let printedString = '';

      for (let i=0; i < randomNumsString.length; i++) {
        if (randomNumsString[i] !== ',') {
          printedString = printedString + randomNumsString[i]
        } else {printedString = printedString + randomNumsString[i] + ' '}
      }

      printedString = '[' + printedString + ']'
      this.userRandomList.push(randomNums); // 숫자 배열 저장
      Console.print(printedString)

    }
    return this.userRandomList;
  };

  async getWinningNumbers(numRangePattern) {
    let winningNumsList;

    try {
      const winningNums = await Console.readLineAsync(MESSAGE.WINNING_INPUT);
      
      if (
        winningNums.includes(',,') ||
        winningNums[0] === ',' ||
        winningNums[winningNums.length-1] === ',' ||
        winningNums === null
        ) {
        throw new Error(ERROR_MESSAGE.INPUT_ERROR);
      }

      winningNumsList = winningNums.split(',').map(Number);
      
      if (winningNumsList.length !== 6 || winningNumsList.length !== new Set(winningNumsList).size) {
        throw new Error(ERROR_MESSAGE.INVALID_ERROR)
      }

      for (let i = 0; i < winningNumsList.length; i++) {
        if (!numRangePattern.test(winningNumsList[i])) {
          throw new Error(ERROR_MESSAGE.INPUT_ERROR)
        }
      }
      return winningNumsList;
    } catch (error) {
      Console.print(ERROR_MESSAGE.INPUT_ERROR);
      return await this.getWinningNumbers(numRangePattern);
    }
  };

  async getBonus(winningNumsList, numRangePattern) {
    try {
      const inputBonus = await Console.readLineAsync(MESSAGE.BONUS_INPUT);

      if (inputBonus === null || isNaN(inputBonus) || winningNumsList.includes(Number(inputBonus))) {
        throw new Error(ERROR_MESSAGE.INPUT_ERROR)
      }
      if (!numRangePattern.test(Number(inputBonus))) {
        throw new Error(ERROR_MESSAGE.INPUT_ERROR)
      }
      return Number(inputBonus);
    } catch (error) {
      Console.print(ERROR_MESSAGE.INPUT_ERROR);
      await this.getBonus(winningNumsList, numRangePattern);
    }
  };

  checkWinningResults(userMoney, winningNumsList, bonus) {
    for (let i = 0; i < this.userRandomList.length; i++) {
      let winningCount = this.userRandomList[i].filter(it => winningNumsList.includes(it)).length
      let isBonus = false;

      if (this.userRandomList[i].includes(bonus)) {
        isBonus = true;
      }

      switch (winningCount) {
        case 3:
          this.winningThree++;
          break;
        case 4:
          if (isBonus) {
            this.winningBonus++;
            break
          }
          this.winningFour++;
        case 5:
          this.winningFive++;
          break
        case 6:
          this.winningSix++;
          break
        default:
          break
      }
    }

    Console.print(MESSAGE_INPUT(this.winningThree).RANK_THREE);
    Console.print(MESSAGE_INPUT(this.winningFour).RANK_FOUR);
    Console.print(MESSAGE_INPUT(this.winningFive).RANK_FIVE);
    Console.print(MESSAGE_INPUT(this.winningBonus).RANK_BONUS);
    Console.print(MESSAGE_INPUT(this.winningSix).RANK_SIX);
    
    const rate = this.getRate();
    Console.print(MESSAGE_INPUT(rate).RATE);
  }

  getRate() {
    const sums = PRIZE.THREE * this.winningThree 
    + PRIZE.FOUR * this.winningFour 
    + PRIZE.FIVE * this.winningFive
    + PRIZE.BONUS * this.winningBonus 
    + PRIZE.SIX * this.winningSix

    this.rate = (sums / this.userMoney*100).toFixed(1);
    console.log(this.rate)
    return this.rate
  }
}
export default App
