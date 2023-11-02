import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { MIN, MAX, UNIT, LOTTO_LENGTH, MATCH } from './constants.js';
export const inputAmount = async () => {
  try {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return amount;
  } catch (error) {
    Console.print(error.message);
  }
};
export const inputWinningNumbers = async () => {
  try {
    const winningNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    let winNums = winningNumbers.split(',');
    //return winningNumbers;
    return winNums.map(x => Number(x));
  } catch (error) {
    Console.print(error.message);
  }
};
export const inputBonusNumber = async () => {
  try {
    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  } catch (error) {
    Console.print(error.message);
  }
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
  Console.print(`${lottos.length}개를 구매했습니다.`);
  lottos.forEach(lotto => {
    Console.print(lotto.getNumbers());
  });
  Console.print('');
};
/*export const getWinningNumbers = numbers => {
  return numbers.split(',');
};*/
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
  const ratio = Math.round((totalMoney / amount) * 100).toFixed(1);
  return ratio;
};
export const printRateOfReturn = ratio => {
  Console.print(`총 수익률은 ${ratio}%입니다.`);
};
