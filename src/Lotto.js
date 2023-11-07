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
    if (!hasNoDuplicates(numbers)) throw new Error("[ERROR] 중복된 숫자가 있습니다.");
  }

  getNumbers() {
    return [...this.#numbers];
  }

  getResult(winNumbers, bonusNumber) {
    const duplicationNumbers = findDuplicateNUmbers(winNumbers, this.#numbers);

    return {winNumbersCount: duplicationNumbers.length, isWinBonus: this.#numbers.includes(bonusNumber)};
  }
}

const findDuplicateNUmbers = (array1, array2) => {
  const returnArray = [];
  for (let number of array1) {
    number = Number(number);
    if (array2.includes(number)) returnArray.push(number);
  }
  return returnArray;
};

const hasNoDuplicates = (array) => {
  const uniqueArray = [...new Set(array)];
  return array.length === uniqueArray.length;
};

export default Lotto;
