import { Console } from '@woowacourse/mission-utils';

class Utils {
  static async ask(question) {
    const userAnswer = await Console.readLineAsync(question);

    return userAnswer;
  }

  static convertInputNumbers(userNumbers) {
    const numbersArray = userNumbers.split(',');
    const convertNumbers = numbersArray.map((number) => Number(number.trim()));

    return convertNumbers;
  }

  static convertPercentNumber(numerator, denominator) {
    const targetNumber = (numerator / denominator) * 100;
    const roundNumber = targetNumber.toFixed(1);
    return Number(roundNumber).toLocaleString();
  }

  static informUser(informations) {
    Console.print(informations);
  }
}

export default Utils;
