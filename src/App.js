import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";
import { MESSAGE, MESSAGE_INPUT, ERROR_MESSAGE } from "./constants/constant.js";

class App {
  async play() {
    // 보유 금액 입력
    const inputMoney = await Console.readLineAsync(MESSAGE.START);
    const userMoney = Number(inputMoney)
    if (isNaN(userMoney)) {
      throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
    }
    const randomCount = (userMoney / 1000);
    Console.print(MESSAGE_INPUT(randomCount).COUNT+'\n');
    
    let userRandomList = []; // 문자열 저장
    let userRandomListNums = []; // 배열 저장
    let count = 0;
    while (1) {
      let randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNums.sort((a, b) => a - b); // 오름차순 정렬
      let st = String(randomNums)
      let new_st = ''
      for (let i=0; i < st.length; i++) {
        if (st[i] !== ',') {
          new_st = new_st + st[i]
        } else {new_st = new_st + st[i] + ' '}
      }
      new_st = '[' + new_st + ']'
      // console.log(new_st)
      // userRandomList.push(new_st); // 문자열 저장
      userRandomListNums.push(randomNums); // 숫자 배열 저장
      Console.print(new_st)
      count++;
    
      if (count === randomCount) {
        break
      }
    }

    const winningNums = await Console.readLineAsync(MESSAGE.WINNING_INPUT);
    const winningNumsList = winningNums.split(',').map(Number); // [ 1, 4, 6, 7, 21, 22 ] 

    const inputBonus = await Console.readLineAsync(MESSAGE.BONUS_INPUT); // 1
    const bonus = Number(inputBonus)

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
    // console.log(sums, rate, userMoney)
    Console.print(MESSAGE_INPUT(rate).RATE);


    // // console.log(userRandomNums.map(num => {if (!isNaN(num)) {Number(num)}}))
    // let temp = [];
    // for (let i=0; i<userRandomNums.length; i++) {
    //   let numList = [];
    //   for (let j = 0; j < userRandomNums[i].length; j++) {
    //     if (userRandomNums[i][j] !== ' ' && !isNaN(userRandomNums[i][j])) {
    //       numList.push(Number(userRandomNums[i][j]))
    //     }
    //   }
    //   temp.push(numList)
    // }
    // console.log(temp)
    // console.log(userRandomNums)
    // for (let i=0; i<numList.length; i++) {
    //   let sameNum = 0;
    //   let isBonus = false;
    //   console.log('여기')
    //   for (let j=0; j<numList[i].length; j++) {
    //     // if (splitWinningNums.includes(numList[i][j])) {
    //     if (winningNumsList.includes(numList[i][j])) {
    //       sameNum++;
    //     }
    //   };
    //   if (numList[i].includes(bonus)) {
    //     isBonus = true;
    //   }
    //   // return문으로 구현하기 (함수로)
    //   if (isBonus && sameNum == 4) {
    //     winningBonus++
    //   } else if (sameNum === 3) {
    //     winningThree++;
    //   } else if (sameNum === 4) {
    //     winningFour++;
    //   } else if (sameNum === 5) {
    //     winningFive++;
    //   } else if (sameNum === 6) {
    //     winningSix++;
    //   }
    //   console.log(sameNum)
    // };

    // // 통계
    // // Console.print(MESSAGE.CALC);
    // Console.print(MESSAGE_INPUT(winningThree).RANK_THREE);
    // Console.print(MESSAGE_INPUT(winningFour).RANK_FOUR);
    // Console.print(MESSAGE_INPUT(winningFive).RANK_FIVE);
    // Console.print(MESSAGE_INPUT(winningBonus).RANK_BONUS);
    // Console.print(MESSAGE_INPUT(winningSix).RANK_SIX);
    
    // // 수익률 계산
    // // 깔끔하게 수정하기
    // const sums = 5000 * winningThree + 50000 * winningFour + 1500000 * winningFive
    // + 30000000 * winningBonus + 2000000000 * winningSix
    // const rate = (sums / userMoney*100).toFixed(1);
    // // console.log(sums, rate, userMoney)
    // Console.print(MESSAGE_INPUT(rate).RATE);
  }
}
export default App
// class App {
//   async play() {
//     // 보유 금액 입력
//     const inputMoney = await Console.readLineAsync(MESSAGE.START);
//     const userMoney = Number(inputMoney)
//     // 보유 금액 유효성 검사
//     if (isNaN(userMoney) || userMoney === null || userMoney % 1000 > 0 || String(userMoney)[0] === '0' || userMoney <= 0) {
//       throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
//     }
//     // for (let i=0; i < String(userMoney).length; i++) {
//     //   if (isNaN(String(userMoney)[i])) {
//     //     throw new Error(ERROR_MESSAGE.INPUT_USERMONEY_ERROR);
//     //   }
//     // };

//     const randomCount = (userMoney / 1000);
//     Console.print(MESSAGE_INPUT(randomCount).COUNT+'\n');
    
//     // 랜덤한 6개 번호를 randomCount 개수만큼 출력
//     // 동일한 값 나왔을때의 예외처리 테스트 필요
//     let userRandomNums = [];
//     let count = 0;
    
//     while (1) {
//       let randomNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      
//       // if (randomNums === null || !Array.isArray(randomNums) || randomNums.length !== new Set(randomNums).size) {
//       //   throw new Error(ERROR_MESSAGE.RANDOM_ERROR);
//       // }
//       // randomNums.sort((a, b) => a - b); // 오름차순 정렬
      
//       if (!userRandomNums.includes(randomNums)) {
//         userRandomNums.push(randomNums);
//         // Console.print(randomNums)
//         count++;
//       }
//       if (count === randomCount) {
//         break
//       }
//     };
//     // Console.print('===')
//     userRandomNums.forEach((lotto) => Console.print(lotto))
    

//     // 당첨 번호 입력
//     const winningNums = await Console.readLineAsync(MESSAGE.WINNING_INPUT);
//     // 유효한지 확인
//     // const removedWinningNums = winningNums.replace(/ /g, ''); // 공백 제거
//     // // 문장 맨앞, 맨뒤 쉼표 확인
//     // if (removedWinningNums[0] === ',' || removedWinningNums[removedWinningNums.length-1] === ',') {
//     //   throw new Error(ERROR_MESSAGE.INPUT_ERROR);
//     // }
//     // // 문자 개수 및 숫자 확인
//     // const splitWinningNums = removedWinningNums.split(',').map(Number);
//     // if (new Set(splitWinningNums).size !== 6) { // 중복 및 개수 확인 (,, 입력 포함)
//     //   throw new Error(ERROR_MESSAGE.INPUT_DUPLICATE_ERROR);
//     // }
//     // for (let i = 0; i < splitWinningNums.length; i++) {
//     //   if (isNaN(splitWinningNums[i])) { // 문자인지 확인
//     //     throw new Error(ERROR_MESSAGE.INPUT_TYPE_ERROR);
//     //   }
//     //   if (splitWinningNums[i] > 45 || splitWinningNums[i] < 1) { // 범위 확인
//     //     throw new Error(ERROR_MESSAGE.INPUT_ERROR);
//     //   }
//     // }

//     // 보너스 번호 입력
//     const bonus = await Console.readLineAsync(MESSAGE.BONUS_INPUT);
//     const bonusNum = Number(bonus);
//     // 숫자인지 확인
//     // if (isNaN(bonusNum)) {
//     //   throw new Error(ERROR_MESSAGE.INPUT_TYPE_ERROR);
//     // };
//     // // 범위 확인
//     // if (bonusNum > 45 || bonusNum < 0) {
//     //   throw new Error(ERROR_MESSAGE.INPUT_ERROR);
//     // };
//     // // 당첨 번호와 중복되는지 확인
//     // if (splitWinningNums.includes(bonusNum)) {
//     //   throw new Error(ERROR_MESSAGE.INPUT_INCLUDES_ERROR)
//     // };
    
//     // 당첨 확인
//     let winningThree = 0;
//     let winningFour = 0;
//     let winningFive = 0;
//     let winningBonus = 0;
//     let winningSix = 0;

//     // 두 문자열 사이 중복되는 값의 개수 확인
//     // Console.print(userRandomNums)
//     for (let i=0; i<userRandomNums.length; i++) {
//       let sameNum = 0;
//       let isBonus = false;
//       for (let j=0; j<userRandomNums[i].length; j++) {
//         // if (splitWinningNums.includes(userRandomNums[i][j])) {
//         if (winningNums.includes(userRandomNums[i][j])) {
//           sameNum++;
//         }
//       };
//       if (userRandomNums[i].includes(bonusNum)) {
//         isBonus = true;
//       }
//       // return문으로 구현하기 (함수로)
//       if (isBonus && sameNum == 4) {
//         winningBonus++
//       } else if (sameNum === 3) {
//         winningThree++;
//       } else if (sameNum === 4) {
//         winningFour++;
//       } else if (sameNum === 5) {
//         winningFive++;
//       } else if (sameNum === 6) {
//         winningSix++;
//       }
//     };
    
    
//     // 통계
//     Console.print(MESSAGE.CALC);
//     Console.print(MESSAGE_INPUT(winningThree).RANK_THREE);
//     Console.print(MESSAGE_INPUT(winningFour).RANK_FOUR);
//     Console.print(MESSAGE_INPUT(winningFive).RANK_FIVE);
//     Console.print(MESSAGE_INPUT(winningBonus).RANK_BONUS);
//     Console.print(MESSAGE_INPUT(winningSix).RANK_SIX);
    
//     // 수익률 계산
//     // 깔끔하게 수정하기
//     const sums = 5000 * winningThree + 50000 * winningFour + 1500000 * winningFive
//     + 30000000 * winningBonus + 2000000000 * winningSix
//     const rate = (sums / userMoney * 0.01).toFixed(1);
//     // console.log(sums, rate, userMoney)
//     Console.print(MESSAGE_INPUT(rate).RATE);
    
//   }
// }

// export default App;
