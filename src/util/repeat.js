import { MissionUtils } from '@woowacourse/mission-utils';

export const repeat = async (
  callback,
  argument = null,
  validators,
  validatorArgument = null
) => {
  let result;

  while (true) {
    try {
      result = await callback(argument);
      validators.forEach(validator => validator(result, validatorArgument));
      break;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  return result;
};
