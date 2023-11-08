import { MissionUtils } from '@woowacourse/mission-utils';

export async function repeatAskingWithErrorHandling(askMethod) {
  let isFail = true;
  while (isFail) {
    try {
      const input = await askMethod();
      isFail = false;
      return input;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}
