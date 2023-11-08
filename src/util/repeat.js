import { MissionUtils } from '@woowacourse/mission-utils';

export const repeat = async (callback, argument, validators) => {
  let result;

  while (true) {
    try {
      result = await callback(argument);
      validators.forEach(validator => validator(result));
      break;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  return result;
};
