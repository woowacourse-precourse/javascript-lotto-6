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

    // TODO: 추가 기능 구현
    
    if (!numbers.every(item => typeof item === 'number' && Number.isInteger(item))) {
      throw new Error("[ERROR] 로또 번호는 정수만 가능합니다.");
    }

    const setNumbers = Array.from(new Set(numbers));
    if (setNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 있어서는 안됩니다.");
    }

    if (!numbers.every(item => item >= 1 && item <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    const sortedNumbers = [...numbers];
    sortedNumbers.sort((a, b) => a - b);
    for (let i = 0; i < 6; i++) {
      if (sortedNumbers[i] !== numbers[i]) {
        throw new Error("[ERROR] 로또 번호는 오름차순으로 적어야 합니다.");
      }
    }
  }
}

export default Lotto;
