import { MissionUtils } from '@woowacourse/mission-utils';

export default async function bonusNumber(answer) {
  const bonusNumber = MissionUtils.Console.readLineAsync(answer);
  return bonusNumber;
}
