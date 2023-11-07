import { MissionUtils } from '@woowacourse/mission-utils';

const input = async (printsString = '') => {
  const inputValue = await MissionUtils.Console.readLineAsync(printsString);
  return inputValue;
};

export default input;
