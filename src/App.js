import { Console } from '@woowacourse/mission-utils';
import generateRandomNumber from './utils/generateRandomNumbers.js';
import InputView from './views/InputView.js';
import GAME_MESSAGES from './constants/GameMessage.js';
import CONDITIONS from './constants/Conditions.js';
import {
  tryToGetBonusNumber,
  tryToGetLottery,
  tryToGetPurchaseAmount,
} from './catchError.js';

function formatWithCommas(number) {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function countMatchingNumbers(arr1, arr2) {
  const intersect = arr1.filter((value) => arr2.includes(value));
  return intersect.length;
}

function countMatchingNumber(arr, targetNum) {
  const intersect = arr.filter((value) => value === targetNum);
  return intersect.length;
}

function printPrize(mine, answer, bonus) {
  const lengthArray = mine.map((array) => {
    return countMatchingNumbers(array, answer);
  });

  const fifthPrize = countMatchingNumber(lengthArray, 3);
  const fourthPrize = countMatchingNumber(lengthArray, 4);

  let secondPrize = 0;
  let thirdPrize = 0;
  lengthArray.forEach((matchCount, index) => {
    if (matchCount === 5) {
      if (mine[index].includes(bonus)) {
        secondPrize++;
      } else {
        thirdPrize++;
      }
    }
  });

  const firstPrize = countMatchingNumber(lengthArray, 6);

  Console.print(`${GAME_MESSAGES.fifthPrize} ${fifthPrize}개`);
  Console.print(`${GAME_MESSAGES.fourthPrize} ${fourthPrize}개`);
  Console.print(`${GAME_MESSAGES.thirdPrize} ${thirdPrize}개`);
  Console.print(`${GAME_MESSAGES.secondPrize} ${secondPrize}개`);
  Console.print(`${GAME_MESSAGES.firstPrize} ${firstPrize}개`);

  return (
    CONDITIONS.fifthPrize * fifthPrize +
    CONDITIONS.fourthPrize * fourthPrize +
    CONDITIONS.thirdPrize * thirdPrize +
    CONDITIONS.secondPrize * secondPrize +
    CONDITIONS.firstPrize * firstPrize
  );
}

function calculateROI(inv, ret) {
  const calculated = ((ret - inv) / inv) * 100;
  return formatWithCommas(calculated.toFixed(1));
}

class App {
  async play() {
    const inputview = new InputView();
    const MY_LOTTERY = [];

    const purchaseAmount = await tryToGetPurchaseAmount(inputview);
    const tryNum = purchaseAmount / 1000;

    Console.print('');
    Console.print(`${tryNum}개를 구매했습니다.`);
    Array.from({ length: tryNum }).forEach(() => {
      const generated = generateRandomNumber();
      Console.print(`[${generated.join(', ')}]`);
      MY_LOTTERY.push(generated);
    });

    Console.print('');
    const lotteryNumbers = await tryToGetLottery(inputview);
    Console.print('');
    const bonusNumber = await tryToGetBonusNumber(inputview, lotteryNumbers);

    Console.print(GAME_MESSAGES.lotteryResult);
    const ret = printPrize(MY_LOTTERY, lotteryNumbers, bonusNumber);
    Console.print(
      `총 수익률은 ${calculateROI(
        purchaseAmount,
        ret + purchaseAmount,
      )}%입니다.`,
    );
  }
}

export default App;
