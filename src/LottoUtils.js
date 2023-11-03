import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { MIN, MAX, UNIT, LOTTO_LENGTH, MATCH } from './constants.js';
import {
  isValidAmount,
  isValidBonusNumber,
  isValidWinningNumbers,
} from './Validation.js';
export const inputAmount = async () => {
  try {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    if (!isValidAmount(amount))
      throw new Error('[ERROR] 금액이 잘못된 형식입니다.\n');
    return amount;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};
export const multiInputAmount = async () => {
  let amount;
  while (true) {
    amount = await inputAmount();
    if (amount) break;
  }
  return amount;
};
export const inputWinningNumbers = async () => {
  try {
    const winningNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    if (!isValidWinningNumbers(winningNumbers))
      throw new Error('[ERROR] 당첨 번호가 잘못된 형식입니다.\n');
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
    const bonusNumber = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    if (!isValidBonusNumber(winningNumbers, Number(bonusNumber)))
      throw new Error('[ERROR] 보너스 번호가 잘못된 형식입니다.\n');
    return Number(bonusNumber);
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};
export const multiInputBonusNumber = async winningNumbers => {
  let bonusNumber;
  while (true) {
    bonusNumber = await inputBonusNumber(winningNumbers);
    if (bonusNumber) break;
  }
  return bonusNumber;
};
export const getRandomNumbers = () => {
  const numbers = Random.pickUniqueNumbersInRange(MIN, MAX, LOTTO_LENGTH);
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
  Console.print(`\n${lottos.length}개를 구매했습니다.`);
  lottos.forEach(lotto => {
    Console.print(`[${lotto.getNumbers().join(', ')}]`);
  });
  Console.print('');
};
export const getResult = (lottos, winningNumbers, bonusNumber) => {
  const result = {};
  Object.keys(MATCH).forEach(rank => {
    result[rank] = {
      money: MATCH[rank].money,
      count: 0,
    };
  });
  lottos.forEach(lotto => {
    const rank = lotto.getRank(winningNumbers, bonusNumber);
    if (rank) result[rank].count += 1;
  });
  return result;
};
export const printResult = result => {
  Console.print('\n당첨 통계\n---');
  Object.keys(result)
    .reverse()
    .forEach(rank => {
      Console.print(`${MATCH[rank].message} - ${result[rank].count}개`);
    });
};
export const getRateOfReturn = (amount, result) => {
  let totalMoney = 0;
  Object.keys(result).forEach(rank => {
    totalMoney += result[rank].money * result[rank].count;
  });
  const ratio = ((totalMoney / amount) * 100).toFixed(1);
  return ratio;
};
export const printRateOfReturn = ratio => {
  Console.print(`총 수익률은 ${ratio}%입니다.`);
};
