import { Console, Random } from '@woowacourse/mission-utils';

const LOTTO = {
  price: 1000,
};

class Utils {
  static async ask(question) {
    const userAnswer = await Console.readLineAsync(question);

    return userAnswer;
  }

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

  static calculateLottoCount(lottoCost) {
    const lottoCostToNumber = Number(lottoCost);
    return lottoCostToNumber / LOTTO.price;
  }
}

export default Utils;
