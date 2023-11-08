class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for(let i=0; i<6; i++) {
      const num = numbers[i];
      this.#validateNumber(num);
    }
    this.#validateDuplicate(numbers);
  }

  #validateNumber(number) {
    const parsedNumber = Number(number)
    if(isNaN(parsedNumber) || parsedNumber<1 || parsedNumber>45) {
      throw new Error("[ERROR] 각 번호는 1~45의 숫자여야 합니다.")
    }
  }

  #validateDuplicate(numberArray) {
    const set = new Set(...numberArray);
    if(set.length!==6) throw new Error("[ERROR] 로또 번호 중 중복된 수가 있습니다.")
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
