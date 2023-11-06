import { Console } from '@woowacourse/mission-utils';

const input = async (inputPrompt) => {
  const inputValue = await Console.readLineAsync(inputPrompt);
  return inputValue;
};

export default input;
