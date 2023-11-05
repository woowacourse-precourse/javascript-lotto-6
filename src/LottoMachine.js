import { MissionUtils } from "@woowacourse/mission-utils";

export function lottoMachine(amount) {
  const lottoNumbers = [];
  for (let index = 0; index < amount; index += 1) {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumbers.sort((a, b) => a - b);
    lottoNumbers.push(randomNumbers);
  }

  return lottoNumbers;
};