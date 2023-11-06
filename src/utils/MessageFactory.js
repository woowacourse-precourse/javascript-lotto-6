import { MissionUtils } from '@woowacourse/mission-utils';
import {
  ERROR_MESSAGE,
  MESSAGE,
  RANK_MESSAGE,
  STATISTICS_MESSAGE,
} from '../constant';

const getErrorMessage = (error) => {
  return `${ERROR_MESSAGE.header}${error}`;
};
const throwError = (error) => {
  const message = getErrorMessage(error);
  printMessage(message);
  throw new Error(message);
};
const changeArrayToStringMessage = (array) => {
  return `[${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}, ${array[5]}]`;
};
/**
 *
 * @param {Lotto[]} lottos
 */
const printPurchasedLottos = (lottos) => {
  printMessage(`${lottos.length}${MESSAGE.numberOfTickets}`);
  lottos.forEach((v) => {
    printMessage(changeArrayToStringMessage(v.getLottoNumbers()));
  });
};

const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

const makeStatisticMessage = (arg) => {
  const { rank, number } = arg;
  return `${RANK_MESSAGE[rank]} - ${number}${STATISTICS_MESSAGE.correctUnit}`;
};
// result :{rank: ,number: }[]
const printWinningResult = (result) => {
  result.forEach((v) => {
    const message = makeStatisticMessage(v);
    printMessage(message);
  });
};

const printRateOfReturn = (number) => {
  const message = `${STATISTICS_MESSAGE.rateOfReturn.header}${number}${STATISTICS_MESSAGE.rateOfReturn.unit}${STATISTICS_MESSAGE.rateOfReturn.footer}`;
  printMessage(message);
};

export {
  changeArrayToStringMessage,
  getErrorMessage,
  printMessage,
  printPurchasedLottos,
  printRateOfReturn,
  printWinningResult,
  throwError,
};
