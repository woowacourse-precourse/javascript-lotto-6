import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";
import { MESSAGE, MESSAGE_INPUT, ERROR_MESSAGE } from "./constants/constant.js";

class App {
  async play() {
    const userMoney = await this.getUserMoney();
    
    // let userMoney;

    // while (1) {
    //   try {
    //     // 보유 금액 입력
    //     const inputMoney = await Console.readLineAsync(MESSAGE.START);
        
    //     if (isNaN(inputMoney) || inputMoney === null) {
    //       throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
    //     }
    //     userMoney = Number(inputMoney)
    //     if (userMoney % 1000 > 0 || userMoney <= 0) {
    //       throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
    //     }
    //     break
    //   } catch (error) {
    //     Console.print(ERROR_MESSAGE.INPUT_USERMONEY_ERROR)
    //   }
    // }
    const randomCount = (userMoney / 1000);
    Console.print(MESSAGE_INPUT(randomCount).COUNT+'\n');
    
    const userRandomListNums = this.makeRandomNumbers(randomCount);
    // let userRandomList = []; // 문자열 저장
    // let userRandomListNums = []; // 배열 저장
    // let count = 0;
    // while (1) {
    //   let randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    //   randomNums.sort((a, b) => a - b); // 오름차순 정렬
    //   let st = String(randomNums)
    //   let new_st = ''
    //   for (let i=0; i < st.length; i++) {
    //     if (st[i] !== ',') {
    //       new_st = new_st + st[i]
    //     } else {new_st = new_st + st[i] + ' '}
    //   }
    //   new_st = '[' + new_st + ']'
    //   // console.log(new_st)
    //   // userRandomList.push(new_st); // 문자열 저장
    //   userRandomListNums.push(randomNums); // 숫자 배열 저장
    //   Console.print(new_st)
    //   count++;
    
    //   if (count === randomCount) {
    //     break
    //   }
    // }

    const numRangePattern = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
    let winningNumsList;
    while (1) {
      try {
        const winningNums = await Console.readLineAsync(MESSAGE.WINNING_INPUT);
        if (
          winningNums.includes(',,') 
          || winningNums[0] === ','
          || winningNums[winningNums.length-1] === ','
          || winningNums === null
          ) {
          throw new Error(ERROR_MESSAGE.INPUT_ERROR);
        }

        winningNumsList = winningNums.split(',').map(Number);
        if (winningNumsList.length !== 6 || winningNumsList.length !== new Set(winningNumsList).size) {
          throw new Error(ERROR_MESSAGE.INPUT_ERROR)
        }

        for (let i = 0; i < winningNumsList.length; i++) {
          if (!numRangePattern.test(winningNumsList[i])) {
            throw new Error(ERROR_MESSAGE.INPUT_ERROR)
          }
        }
        break
      } catch (error) {
        Console.print(ERROR_MESSAGE.INPUT_ERROR)
      }
    }

    let bonus;
    while (1) {
      try {
        const inputBonus = await Console.readLineAsync(MESSAGE.BONUS_INPUT);
        if (inputBonus === null || isNaN(inputBonus) || winningNumsList.includes(Number(inputBonus))) {
          throw new Error(ERROR_MESSAGE.INPUT_ERROR)
        }
        if (!numRangePattern.test(inputBonus)) {
          throw new Error(ERROR_MESSAGE.INPUT_ERROR)
        }
        bonus = Number(inputBonus);
        break
      } catch (error) {
        Console.print(ERROR_MESSAGE.INPUT_ERROR)
      }
    }


    // 당첨 확인
    let winningThree = 0;
    let winningFour = 0;
    let winningFive = 0;
    let winningBonus = 0;
    let winningSix = 0;

    for (let i = 0; i < userRandomListNums.length; i++) {
      let winningCount = userRandomListNums[i].filter(it => winningNumsList.includes(it)).length
      let isBonus = false;
      if (userRandomListNums[i].includes(bonus)) {
        isBonus = true;
      }

      if (isBonus && winningCount == 4) {
        winningBonus++
      } else if (winningCount === 3) {
        winningThree++;
      } else if (winningCount === 4) {
        winningFour++;
      } else if (winningCount === 5) {
        winningFive++;
      } else if (winningCount === 6) {
        winningSix++;
      }
    }
    Console.print(MESSAGE_INPUT(winningThree).RANK_THREE);
    Console.print(MESSAGE_INPUT(winningFour).RANK_FOUR);
    Console.print(MESSAGE_INPUT(winningFive).RANK_FIVE);
    Console.print(MESSAGE_INPUT(winningBonus).RANK_BONUS);
    Console.print(MESSAGE_INPUT(winningSix).RANK_SIX);
    
    // 수익률 계산
    // 깔끔하게 수정하기
    const sums = 5000 * winningThree + 50000 * winningFour + 1500000 * winningFive
    + 30000000 * winningBonus + 2000000000 * winningSix
    const rate = (sums / userMoney*100).toFixed(1);

    Console.print(MESSAGE_INPUT(rate).RATE);
  }

  async getUserMoney() {
    while (1) {
      try {
        // 보유 금액 입력
        const inputMoney = await Console.readLineAsync(MESSAGE.START);
        
        if (isNaN(inputMoney) || inputMoney === null) {
          throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
        }
        const userMoney = Number(inputMoney)
        if (userMoney % 1000 > 0 || userMoney <= 0) {
          throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
        }
        return userMoney;
      } catch (error) {
        Console.print(ERROR_MESSAGE.INPUT_USERMONEY_ERROR)
      }
    }
  };

  makeRandomNumbers(randomCount) {
    const userRandomListNums = []; // 배열 저장

    while (userRandomListNums.length < randomCount) {
      let randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNums.sort((a, b) => a - b); // 오름차순 정렬
      
      let randomNumsString = String(randomNums);
      let printedString = '';

      for (let i=0; i < randomNumsString.length; i++) {
        if (randomNumsString[i] !== ',') {
          printedString = printedString + randomNumsString[i]
        } else {printedString = printedString + randomNumsString[i] + ' '}
      }

      printedString = '[' + printedString + ']'
      userRandomListNums.push(randomNums); // 숫자 배열 저장
      Console.print(printedString)
    }
    return userRandomListNums;
  };
}
export default App
