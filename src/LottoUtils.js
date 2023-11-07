import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  MIN,
  MAX,
  UNIT,
  LOTTO_LENGTH,
  MATCH,
  MATCH_MESSAGE,
  MATCH_MONEY,
} from './constants.js';

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

export const getRateOfReturn = (amount, result) => {
  let totalMoney = 0;
  result.forEach(rank => {
    totalMoney += rank.money * rank.count;
  });
  const ratio = ((totalMoney / amount) * 100).toFixed(1);
  return ratio;
};
