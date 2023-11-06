import Generator from './Generator.js';

class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.bonus = bonus;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getResult(userNumbers) {
    const lottoCount = Generator.lottoCountGenerator(
      userNumbers,
      this.#numbers
    );

    const isBonus = null;
    if (lottoCount === 5)
      isBonus = Generator.isBonusGenerator(userNumbers, this.bonus);

    return { lottoCount, isBonus };
  }
}

export default Lotto;
