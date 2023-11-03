import { Console } from '@woowacourse/mission-utils';
import {
  GAME_RULE_NUMBER,
  GAME_WINNER,
  PRINT_MESSAGES,
} from '../constant/constants.js';

async function getUserInput(message) {
  const userInput = await Console.readLineAsync(message);
  return userInput;
}
const printPurchasedAmount = (amount) => {
  Console.print(PRINT_MESSAGES.purcahsedAmount(amount));
};

const printPurchasedLottos = (lottos) => {
  lottos.map((lotto) => Console.print(lotto));
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
      Math.round((totalProfit / (totalAmount * GAME_RULE_NUMBER.price)) * 100) /
        100,
    ),
  );
};

const printRankingList = (rankingList) => {
  const rankList = ['nothing', 'fifth', 'fourth', 'third', 'second', 'first'];
  Console.print('');
  const rankAmount = rankList.map(
    (rank) => rankingList.filter((el) => el === rank).length,
  );
  rankList.forEach((rank, idx) => {
    Console.print(GAME_WINNER[rank](rankAmount[idx]));
  });
  printProfit(rankAmount);
};

export {
  getUserInput,
  printPurchasedAmount,
  printPurchasedLottos,
  printRankingList,
  printProfit,
};
