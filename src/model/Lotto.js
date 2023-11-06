class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.#validate(numbers,bonus);
    this.#numbers = [...numbers, bonus];
  }



  #validate(numbers, bonus) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    if (new Set(numbers).size !== numbers.length)
      throw new Error("[ERROR] 로또 번호는 중복이 안되어야 합니다.");

    if (numbers.some((number) => number < 1 || number > 45))
      throw new Error("[ERROR] 로또 번호는 1부터 45사이로 설정해야 합니다.");

    if (numbers.includes(bonus))
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복이 되면 안됩니다.");

    if (bonus < 1 || bonus > 45)
      throw new Error("[ERROR] 보너스 번호는 1부터 45사이로 설정해야 합니다.");
  }

}

export default Lotto;
