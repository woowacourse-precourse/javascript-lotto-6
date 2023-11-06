import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT } from './constants/messages.js';

class Result {
  #match;
  #matchMessage;
  #reward;

  constructor(match, matchMessage, reward) {
    this.#match = match;
    this.#matchMessage = matchMessage;
    this.#reward = reward;
    this.totalReward = 0;
    this.print();
  }

  print() {
    const reward = this.#reward.toLocaleString();
    MissionUtils.Console.print(OUTPUT.RESULT(this.#matchMessage, reward, this.#match));

    this.countTotalReward();
  }

  countTotalReward() {
    this.totalReward += this.#reward * this.#match;
  }
}

export default Result;
