import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant';

const getErrorMessage = (error) => {
  return `${ERROR_MESSAGE.header}${error}`;
};
const throwError = (error) => {
  throw new Error(getErrorMessage(error));
};
const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

export { getErrorMessage, printMessage, throwError };
