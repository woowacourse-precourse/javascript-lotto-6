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
  throw new Error(getErrorMessage(error));
};
/**
 *
 * @param {Lotto[]} lottos
 */
const printPurchasedLottos = (lottos) => {
  printMessage(`${lottos.length}${MESSAGE.numberOfTickets}`);
  lottos.forEach((v) => {
    printMessage(JSON.stringify(v.getLottoNumbers()));
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
  getErrorMessage,
  printMessage,
  printPurchasedLottos,
  printRateOfReturn,
  printWinningResult,
  throwError,
};
