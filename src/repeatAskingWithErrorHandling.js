import { MissionUtils } from '@woowacourse/mission-utils';

export async function repeatAskingWithErrorHandling(askMethod) {
  while (true) {
    try {
      const input = await askMethod();
      return input;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}
