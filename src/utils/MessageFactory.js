import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from '../constant';

const getErrorMessage = (error) => {
  return `${ERROR_MESSAGE.header}${error}`;
};
const throwError = (error) => {
  throw new Error(getErrorMessage(error));
};

const printPurchasedLottos = (lottos) => {
  printMessage(`${lottos.length}${MESSAGE.numberOfTickets}`);
  lottos.forEach((v) => {
    printMessage(v);
    printMessage();
  });
};

const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

export { getErrorMessage, printMessage, printPurchasedLottos, throwError };
