import { Random, Console } from '@woowacourse/mission-utils';

class GameManager {
  constructor() {}

  static getRandomNumber() {
    const randomArray = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomArray.sort((a, b) => Number(a) - Number(b));
    return randomArray;
  }

  static splitWinNumber(winNumberArray) {
    const splitNumber = winNumberArray.split(',').map((input) => Number(input));
    return splitNumber;
  }
}

export default GameManager;
