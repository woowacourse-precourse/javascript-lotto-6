import { Console } from '@woowacourse/mission-utils';
import { lottoPrize } from '../constants/constants';

export const getPrize = ranking => {
  let prize = 0;
  const rankKey = Object.keys(ranking);

  rankKey.forEach(key => {
    prize += ranking[key] * lottoPrize[key];
  });
  return prize;
};

export const getEarningRate = (prize, cash) => {
  const rate = ((prize / cash) * 100).toFixed(1);
  Console.print(`총 수익률은 ${rate}%입니다.`);
};
