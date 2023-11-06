class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const hasDuplicates = (numbers) => {
      const uniqueNumbers = [...new Set(numbers)];
      return numbers.length !== uniqueNumbers.length;
    };
    
    numbers.every(num => {
      if(Number.isNaN(num))
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    });

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if(hasDuplicates(numbers)) {
      throw new Error("[ERROR] 서로 다른 숫자를 입력해야 합니다.");
    }

    numbers.every(num => {
      if(num <= 0 || num >= 46)
        throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
      if(num >= 1 && num <= 45 && Number.isInteger(num))
        return true;
    });
  }

  // TODO: 추가 기능 구현

  async start() {
    await this.getPrice();
    await this.getSixNum();
    await this.getBonusNum();
  }
}

export default Lotto;
