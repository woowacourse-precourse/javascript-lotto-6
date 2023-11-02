import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, GAME_RULE_NUMBER } from '../constant/constants.js';

async function getUserInput(message) {
  const userInput = await Console.readLineAsync(message);
  return userInput;
}

const lottoNumber = () =>
  Random.pickUniqueNumbersInRange(
    GAME_RULE_NUMBER.min,
    GAME_RULE_NUMBER.max,
    GAME_RULE_NUMBER.length,
  );

const getUserLottoNumbers = (amount) => {
  const userLottoNumbers = [];
  for (let i = 0; i < amount; i += 1) {
    userLottoNumbers.push(lottoNumber().sort((a, b) => a - b));
  }
  return userLottoNumbers;
};
