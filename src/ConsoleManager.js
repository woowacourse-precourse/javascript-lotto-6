import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

function isNumber(str) {
  return /^\d+$/.test(str);
}

function validatePurchaseMoney(str) {
  const money = Number(str);
  if (!isNumber(str)) {
    throw new Error('[ERROR] 숫자 형식으로 입력해주세요');
  }
  if (money % 1000 !== 0) {
    throw new Error('[ERROR] 1000원 단위로 입력해주세요');
  }
}

function validateBonus(str) {
  if (!isNumber(str)) {
    throw new Error('[ERROR] 숫자 형식으로 입력해주세요');
  }
}

export async function getPurchaseMoney() {
  Console.print('구입금액을 입력해 주세요.');
  const input = await Console.readLineAsync('');

  try {
    validatePurchaseMoney(input);
  } catch (error) {
    Console.print(error.message);
    return getPurchaseMoney();
  }

  return Number(input);
}

export async function getWinningLotto() {
  Console.print('당첨 번호를 입력해 주세요.');
  const input = await Console.readLineAsync('');
  let lotto;

  try {
    lotto = new Lotto(input.split(',').map(Number));
  } catch (error) {
    Console.print(error.message);
    return getWinningLotto();
  }

  return lotto;
}

export async function getBonus() {
  Console.print('보너스 번호를 입력해 주세요.');
  const input = await Console.readLineAsync('');

  try {
    validateBonus(input);
  } catch (error) {
    Console.print(error.message);
    return getBonus();
  }

  return Number(input);
}

export function printResult(lottoPrizes, lottoPrizeMoney, purchaseMoney) {
  Console.print('당첨 통계');
  Console.print('---');
  Console.print(`3개 일치 (5,000원) - ${lottoPrizes[3]}개`);
  Console.print(`4개 일치 (50,000원) - ${lottoPrizes[4]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${lottoPrizes[5]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoPrizes['5-b']}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${lottoPrizes[6]}개`);

  Console.print(`총 수익률은 ${((lottoPrizeMoney / purchaseMoney) * 100).toFixed(1)}%입니다.`);
}
