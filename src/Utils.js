import { Random } from '@woowacourse/mission-utils';

class Utils {
  static getRandomNumbers() {
    const numbersArray = [];
    while (numbersArray.length < 6) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 49);

      if (!numbersArray.includes(randomNumber)) {
        numbersArray.push(randomNumber);
      }
    }

    return numbersArray;
  }
}

export default Utils;
