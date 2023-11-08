import { Console } from '@woowacourse/mission-utils';
import {
  PAYMENT_COMMENT,
  WINNING_NUMBERS_COMMENT,
  BONUS_NUMBER_COMMENT,
} from '../constants/inputConstants.js';

export const readlinePayMoneyNumberAsync = async () =>
  Number(await Console.readLineAsync(PAYMENT_COMMENT));

export const readlineWinningNumberListAync = async () =>
  (await Console.readLineAsync(WINNING_NUMBERS_COMMENT))
    .split(',')
    .map((element) => Number(element));

// winningNumberList 받는거로 변경됨.
export const readlineBonusNumberAsync = async () =>
  Number(await Console.readLineAsync(BONUS_NUMBER_COMMENT));
