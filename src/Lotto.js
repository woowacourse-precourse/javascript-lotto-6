class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateBonusNum(numbers, bonusNum);
    this.#numbers = numbers;
  }

  hasDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)];
    return numbers.length !== uniqueNumbers.length;
  };

  #validate(numbers) {
    if (!numbers.isArray())
      throw new Error("[ERROR] 콤마(,)로 구분해야 합니다.");
    if (numbers.every(num => Number.isNaN(num)))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (hasDuplicates(numbers))
      throw new Error("[ERROR] 서로 다른 숫자를 입력해야 합니다.");
    if (numbers.some(num => num <= 0 || num >= 46))
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (numbers.some(num => num >= 1 && num <= 45 && Number.isInteger(num)) === false)
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
  }

  #validateBonusNum(numbers, bonusNum) {
    // 작성
  }

  // TODO: 추가 기능 구현

  async start() {
    await this.getPrice();
    await this.getSixNum();
    await this.getBonusNum();
  }
}

export default Lotto;
