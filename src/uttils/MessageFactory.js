import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant';

const getErrorMessage = (errorMessage) => {
  return `${ERROR_MESSAGE.header}${errorMessage}`;
};
const getNumberErrorMessage = (errorMessage) => {
  getErrorMessage(`${ERROR_MESSAGE.wrongNumber} ${errorMessage}`);
};
const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

export { getErrorMessage, getNumberErrorMessage, printMessage };
