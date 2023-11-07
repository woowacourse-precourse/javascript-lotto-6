import { Console } from '@woowacourse/mission-utils';
import {
  PAYMENTCOMMENT,
  WINNINGNUMBERSCOMMENT,
  BONUSNUMBERCOMMENT,
} from '../constants/inputConstants.js';

export const readlinePayMoneyNumberAsync = async () =>
  Number(await Console.readLineAsync(PAYMENTCOMMENT));

export const readlineWinningNumberListAync = async () =>
  (await Console.readLineAsync(WINNINGNUMBERSCOMMENT))
    .split(',')
    .map((element) => Number(element));

// winningNumberList 받는거로 변경됨.
export const readlineBonusNumberAsync = async () =>
  Number(await Console.readLineAsync(BONUSNUMBERCOMMENT));
