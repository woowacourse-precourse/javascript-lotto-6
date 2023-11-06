import { Console } from '@woowacourse/mission-utils';

export const printMessage = message => {
  Console.print(message);
};

export const printInputMessage = async message => {
  await Console.readLineAsync(message);
};

export const printErrorMessage = message => {
  const newError = new Error(message);
  newError.name = '[ERROR]';
  throw newError;
};
