class Lotto {
  #numbers;

  constructor(numbers) {
      this.#validate(numbers);
      this.#numbers = numbers;
  }

  #validate(numbers) {
      if (!(numbers instanceof Array && numbers.length === 6)) {
          throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
      }
      if (!numbers.every(num => typeof num === 'number' && num)) {
          throw new Error('[ERROR] 로또 번호는 1부터 45의 숫자만 사용하실 수 있습니다.');
      }
      if (!numbers.every(num => num >= 1 && num <= 45)) {
          throw new Error('[ERROR] 로또 번호는 1부터 45의 숫자만 사용하실 수 있습니다.');
      }
      if (new Set(numbers).size !== 6) {
          throw new Error('[ERROR] 중복된 번호는 사용하실 수 없습니다.');
      }
      if (!numbers.every((num, i) => i === 0 || num > numbers[i - 1])) {
          throw new Error('[ERROR] 오름차순 정렬이 되어있지 않은 배열입니다.');
      }
  }

  getNumbers() {
      return this.#numbers;
  }
}

export default Lotto;