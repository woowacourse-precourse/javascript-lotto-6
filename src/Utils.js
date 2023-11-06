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
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }

  static convertInputNumbers(userNumbers) {
    const numbersArray = userNumbers.split(',');
    const convertNumbers = numbersArray.map((number) => Number(number.trim()));

    return convertNumbers;
  }

  static calculateLottoCount(lottoCost) {
    return lottoCost / LOTTO.price;
  }
}

export default Utils;
