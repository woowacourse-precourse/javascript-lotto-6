import { MissionUtils } from '@woowacourse/mission-utils';

class RandomPick {
  randomNumber;

  getRandomNumber = async () => {
    this.randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    return this.randomNumber;
  };
}

export default RandomPick;
