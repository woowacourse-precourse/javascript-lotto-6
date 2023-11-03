import { Console } from '@woowacourse/mission-utils';
import { GAME_WINNER, PRINT_MESSAGES } from '../constant/constants.js';

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

const printRankingList = (rankingList) => {
  const rankList = ['fifth', 'fourth', 'third', 'second', 'first'];
  rankList.map((rank) =>
    Console.print(
      GAME_WINNER[rank](rankingList.filter((el) => el === rank).length),
    ),
  );
};

printRankingList(['fifth', 'first']);
export {
  getUserInput,
  printPurchasedAmount,
  printPurchasedLottos,
  printRankingList,
};
