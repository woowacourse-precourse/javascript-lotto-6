import { Console } from '@woowacourse/mission-utils';
import { validateMoney } from './validate.js';
import { inputMessages } from '../message/ui.js';
import printError from './error.js';

export const inputMoney = async () => {
  const money = await Console.readLineAsync(inputMessages.MONEY);
  try {
    validateMoney(money);
  } catch (error) {
    printError(error);
    return inputMoney();
  }

  return money;
};

export const inputWinningLotto = async () => {
  const winningLottoNumbers = await Console.readLineAsync(inputMessages.WINNING_LOTTO);
  return winningLottoNumbers.split(',').map((number) => Number(number));
};

export const inputBonusNumber = async () => {
  const bonusNumber = await Console.readLineAsync(inputMessages.BONUS_NUMBER);
  return Number(bonusNumber);
};
