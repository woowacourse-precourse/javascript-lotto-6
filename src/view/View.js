import { Console } from '@woowacourse/mission-utils';
import {
  MESSAGE_LOTTO_COUNT,
  MESSAGE_NOTIFICATION,
  MESSAGE_RANK_RESULT,
} from '../constants/Message.js';
import { isValidBounsNumber, isValidBuyAmount, isValidWinningLotto } from '../utils/Validation.js';

export async function inputBuyAmount() {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.buyAmount);
    isValidBuyAmount(inputValue);
    return Number(inputValue);
  } catch (err) {
    Console.print(err.message);
    return inputBuyAmount();
  }
}

export async function inputWinningLotto() {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.winningLotto);
    isValidWinningLotto(inputValue);
    return inputValue.split(',').map((number) => Number(number));
  } catch (err) {
    Console.print(err.message);
    return inputWinningLotto();
  }
}

export async function inputBounsNumber(winningLottoNumbers) {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.bonusNumber);
    isValidBounsNumber(inputValue, winningLottoNumbers);
    return Number(inputValue);
  } catch (err) {
    Console.print(err.message);
    return inputBounsNumber(winningLottoNumbers);
  }
}

export function printBuyLotto(buyLottoCnt) {
  Console.print(MESSAGE_LOTTO_COUNT.buyLotto(buyLottoCnt));
}

export function printLottoArray(lottos) {
  const lottosList = [];
  lottos.forEach((lotto) => {
    lottosList.push(`[${lotto.join(', ')}]`);
  });
  lottosList.forEach((lotto) => Console.print(lotto));
}

export function printResult() {
  Console.print(MESSAGE_NOTIFICATION.result);
}

export function printResultDetail(result) {
  result.forEach((value, index) => {
    Console.print(Object.values(MESSAGE_RANK_RESULT)[index](value));
  });
}

export function printProfitRate(profitRate) {
  Console.print(`${MESSAGE_NOTIFICATION.profitRate} ${profitRate}%입니다.`);
}
