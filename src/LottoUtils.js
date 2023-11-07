import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  MIN,
  MAX,
  UNIT,
  LOTTO_LENGTH,
  MATCH,
  MATCH_MESSAGE,
  MATCH_MONEY,
  MESSAGE,
} from './constants.js';
import {
  isValidAmount,
  isValidBonusNumber,
  isValidWinningNumbers,
} from './Validation.js';
import MessageFormat from './MessageFormat.js';
export const inputAmount = async () => {
  try {
    const amount = await Console.readLineAsync(MESSAGE.input.amount);
    if (!isValidAmount(amount)) throw new Error(MESSAGE.error.amount);
    return amount;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};
export const multiInputAmount = async () => {
  let amount;
  do {
    amount = await inputAmount();
  } while (!amount);
  return amount;
};
export const inputWinningNumbers = async () => {
  try {
    const winningNumbers = await Console.readLineAsync(
      MESSAGE.input.winningNumbers,
    );
    if (!isValidWinningNumbers(winningNumbers))
      throw new Error(MESSAGE.error.winningNumbers);
    return winningNumbers.split(',').map(x => Number(x));
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};
export const multiInputWinningNumbers = async () => {
  let winningNumbers;
  while (true) {
    winningNumbers = await inputWinningNumbers();
    if (Array.isArray(winningNumbers)) break;
  }
  return winningNumbers;
};
export const inputBonusNumber = async winningNumbers => {
  try {
    const bonusNumber = await Console.readLineAsync(MESSAGE.input.bonusNumber);
    if (!isValidBonusNumber(winningNumbers, Number(bonusNumber)))
      throw new Error(MESSAGE.error.bonusNumber);
    return Number(bonusNumber);
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};
export const multiInputBonusNumber = async winningNumbers => {
  let bonusNumber;
  do {
    bonusNumber = await inputBonusNumber(winningNumbers);
  } while (!bonusNumber);
  return bonusNumber;
};
export const getRandomNumbers = () => {
  const numbers = Random.pickUniqueNumbersInRange(MIN, MAX, LOTTO_LENGTH).sort(
    (a, b) => a - b,
  );
  return numbers;
};
export const getLottoCount = amount => {
  return amount / UNIT;
};
export const issueLotto = () => {
  const numbers = getRandomNumbers();
  const lotto = new Lotto(numbers);
  return lotto;
};
export const getLottos = lotto_count => {
  const lottos = [];
  for (let i = 0; i < lotto_count; i++) {
    const newLotto = issueLotto();
    lottos.push(newLotto);
  }
  return lottos;
};
export const printLottos = lottos => {
  Console.print(MessageFormat.lottoCount(lottos.length));
  lottos.forEach(lotto => {
    Console.print(`[${lotto.getNumbers().join(', ')}]`);
  });
};
export const getResult = (lottos, winningNumbers, bonusNumber) => {
  const result = MATCH.map(rank => {
    return {
      rank: rank,
      message: MATCH_MESSAGE[rank],
      money: MATCH_MONEY[rank],
      count: 0,
    };
  });
  lottos.forEach(lotto => {
    const rank = lotto.getRank(winningNumbers, bonusNumber);
    if (rank > 0) result[rank - 1].count += 1;
  });
  return result;
};
export const printResult = result => {
  Console.print(MESSAGE.result);
  result.reverse().forEach(rank => {
    Console.print(`${rank.message} - ${rank.count}개`);
  });
};
export const getRateOfReturn = (amount, result) => {
  let totalMoney = 0;
  result.forEach(rank => {
    totalMoney += rank.money * rank.count;
  });
  const ratio = ((totalMoney / amount) * 100).toFixed(1);
  return ratio;
};
export const printRateOfReturn = ratio => {
  Console.print(MessageFormat.rateOfReturn(ratio));
};
