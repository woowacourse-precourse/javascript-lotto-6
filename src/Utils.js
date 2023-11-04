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

  static convertInputNumbers(userNumbers) {
    const numbersArray = userNumbers.split(',');
    const convertNumbers = numbersArray.map((number) => Number(number.trim()));

    return convertNumbers;
  }
}

export default Utils;
