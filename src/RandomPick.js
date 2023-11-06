import { MissionUtils } from '@woowacourse/mission-utils';

class RandomPick {
  randomNumber;

  getRandomNumber = async () => {
    this.randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.randomNumber;
  };
}

export default RandomPick;
