import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant';
import { hasNoComma, throwError } from '.';

const readInput = async (query) => {
  try {
    const value = await MissionUtils.Console.readLineAsync(query);
    return value.replaceAll(' ', '');
  } catch (error) {
    throwError(error);
  }
};

const readWinningNumbers = async () => {
  try {
    const value = await readInput(MESSAGE.winningNumbersQuery);
    hasNoComma(value);
    return value.split(',').map((v) => Number(v));
  } catch (error) {
    throwError(error);
  }
};

const readBonusNumber = async () => {
  try {
    const value = await readInput(MESSAGE.bonusBallNumberQuery);
    return Number(value);
  } catch (error) {
    throwError(error);
  }
};

const readPayment = async () => {
  try {
    const value = await readInput(MESSAGE.paymentQuery);
    return Number(value);
  } catch (error) {
    throwError(error);
  }
};

export { readInput, readBonusNumber, readPayment, readWinningNumbers };
