import { Random, Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGES,
  GAME_RULE_NUMBER,
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
export { getUserInput, printPurchasedAmount, printPurchasedLottos };
