import Generator from './Generator.js';
import ValidatorUtil from './validators/ValidatorUtil.js';

class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.#validate(numbers, bonus);
    this.#numbers = numbers;
    this.bonus = bonus;
  }

  #validate(numbers, bonus) {
    ValidatorUtil.duplicationValidate(numbers, bonus);
  }

  getResult(userNumbers) {
    const lottoCount = Generator.lottoCountGenerator(
      userNumbers,
      this.#numbers
    );

    let isBonus = null;
    if (lottoCount === 5)
      isBonus = Generator.isBonusGenerator(userNumbers, this.bonus);

    return { lottoCount, isBonus };
  }
}

export default Lotto;
