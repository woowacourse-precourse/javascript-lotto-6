import { MissionUtils } from '@woowacourse/mission-utils';

export default async function inputMethod(inputConstants) {
  const input = await MissionUtils.Console.readLineAsync(inputConstants);
  return input;
}
