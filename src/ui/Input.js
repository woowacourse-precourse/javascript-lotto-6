import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PLAY } from "../constants/Messeage.js";
import { 
  validatePurchaseAmount,
  validateLuckyNumber,
  validateBonusNumber } from "../error/Validation.js";

export const getPurchaseAmount = async () => {
  const amount = await Console.readLineAsync(`${LOTTO_PLAY.inputAmount}\n`);
  validatePurchaseAmount(amount);

  Console.print('');

  return Number(amount);
} 

export const getLuckyNumber = async () => {
  const lucky = await Console.readLineAsync(`${LOTTO_PLAY.inputLucky}\n`);
  validateLuckyNumber(lucky);

  Console.print('');

  return lucky.split(',').map((number) => Number(number));
}

export const getBonusNumber = async (luckyNumberArray) => {
  const bonus = await Console.readLineAsync(`${LOTTO_PLAY.inputBonus}\n`);
  validateBonusNumber(bonus, luckyNumberArray);
  
  Console.print('');

  return Number(bonus);
}




