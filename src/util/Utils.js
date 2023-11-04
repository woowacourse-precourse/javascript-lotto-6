import { Console } from '@woowacourse/mission-utils';
import {
  GAME_RULE_NUMBER,
  GAME_WINNER,
  INPUT_MESSAGES,
  PRINT_MESSAGES,
} from '../constant/constants.js';
import {
  checkPurchasingMoney,
  checkBonusNumber,
  checkWinningNumbers,
} from './Validation.js';

async function getInputPurchasingMoney() {
  let userInput;
  try {
    userInput = await Console.readLineAsync(INPUT_MESSAGES.purcahsingMoney);
    checkPurchasingMoney(userInput);
  } catch (error) {
    Console.print(error.message);
    await getInputPurchasingMoney();
  }
  return userInput;
}

async function getInputWinningNumbers() {
  let userInput;
  try {
    userInput = await Console.readLineAsync(INPUT_MESSAGES.lottoWinningNumbers);
    checkWinningNumbers(userInput);
  } catch (error) {
    Console.print(error.message);
    await getInputWinningNumbers();
  }
  return userInput;
}

async function getInputBonusNumber() {
  let userInput;
  try {
    userInput = await Console.readLineAsync(INPUT_MESSAGES.lottoBonusNumber);
    checkBonusNumber(userInput);
  } catch (error) {
    Console.print(error.message);
    await getInputBonusNumber();
  }
  return userInput;
}

const printPurchasedAmount = (amount, lottos) => {
  Console.print(PRINT_MESSAGES.purcahsedAmount(amount));
  lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
};

const printProfit = (rankAmount) => {
  let totalAmount = 0;
  let totalProfit = 0;
  rankAmount.forEach((rank, idx) => {
    totalProfit += +GAME_WINNER.lottoPrize[idx] * rank;
  });
  rankAmount.forEach((amount) => {
    totalAmount += amount;
  });
  Console.print(
    PRINT_MESSAGES.profitMessage(
      Math.round(
        (totalProfit / (totalAmount * GAME_RULE_NUMBER.price)) * 1000,
      ) / 10,
    ),
  );
};

const printRankingList = (rankingList) => {
  const rankList = ['nothing', 'fifth', 'fourth', 'third', 'second', 'first'];
  const rankAmount = rankList.map(
    (rank) => rankingList.filter((el) => el === rank).length,
  );
  Console.print(PRINT_MESSAGES.winStatistics);
  rankList.forEach((rank, idx) => {
    Console.print(GAME_WINNER[rank](rankAmount[idx]));
  });
  printProfit(rankAmount);
};

export {
  getInputPurchasingMoney,
  getInputBonusNumber,
  getInputWinningNumbers,
  printPurchasedAmount,
  printRankingList,
  printProfit,
};
