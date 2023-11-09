import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants/Constant.js';

export async function inputBonusNumber(winningNumber) {
  try {
    const userInputBonusNumber = await Console.readLineAsync(MESSAGE.enterBonusNumber);
    await validateBonusNumber(winningNumber, userInputBonusNumber);

    return userInputBonusNumber;
  } catch (error) {
    Console.print(error.message);

    return inputBonusNumber(winningNumber);
  }
}

async function validateBonusNumber(winningNumber, bonusNumber) {
  const parsedBonusNumber = Number.parseFloat(bonusNumber);
  if (winningNumber.checkSameNumber(parsedBonusNumber)) {
    throw new Error(ERROR.sameNumber);
  }

  if (parsedBonusNumber > 45 || parsedBonusNumber < 1) {
    throw new Error(ERROR.rangeOfBonusNumber);
  }

  if (!Number.isInteger(parsedBonusNumber)) {
    throw new Error(ERROR.bonusTypeNotNumber);
  }
}
