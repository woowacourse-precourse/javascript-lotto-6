import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from '../constant';

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

export { getErrorMessage, printMessage, printPurchasedLottos, throwError };
