import { MissionUtils } from '@woowacourse/mission-utils'

export const generateNumbers = async function generateSixLottoNumbers() {
  const randomNumbers = await MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  randomNumbers.sort((a, b) => a - b);

  return randomNumbers
}
