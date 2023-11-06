import { Random } from '@woowacourse/mission-utils';

class Generator {
  static randomNumbersGenerator(purchaseAmount) {
    const result = [];

    for (let index = 0; index < purchaseAmount; index++) {
      const sortedRandomNumbers = Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((num1, num2) => num1 - num2);
      result.push(sortedRandomNumbers);
    }

    return result;
  }

  static lottoCountGenerator(userNumbers, lottoNumbers) {
    const countNumbers = userNumbers.fillter((number) =>
      lottoNumbers.includes(number)
    );
    const count = countNumbers.length();

    return count;
  }

  static isBonusGenerator(userNumbers, bonusNumber) {
    return userNumbers.includes(bonusNumber) ? true : false;
  }

  static profitGenerator(lottoCount, isBonus) {
    switch (lottoCount) {
      case 3:
        return 5000;
      case 4:
        return 50000;
      case 5:
        return isBonus ? 30000000 : 1500000;
      case 6:
        return 2000000000;
      default:
        return null;
    }
  }
}

export default Generator;
