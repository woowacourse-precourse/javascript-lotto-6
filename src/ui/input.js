import { Console } from '@woowacourse/mission-utils';
import { validateMoney } from './validate.js';
import { inputMessages } from '../message/ui.js';

const printError = (error) => {
  Console.print(`[ERROR] ${error.message}`);
};

export const inputMoney = async () => {
  const money = await Console.readLineAsync(inputMessages.MONEY);
  try{
    validateMoney(money);
  } catch (error) {
    printError(error);
    return await inputMoney();
  }
  
  return money;
};
