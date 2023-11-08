import { MissionUtils } from '@woowacourse/mission-utils';

export default async function playerNumber(answer) {
  const number = MissionUtils.Console.readLineAsync(answer);
  return number;
}
