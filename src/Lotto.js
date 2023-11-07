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
  }

  // TODO: 추가 기능 구현
}

function lottoNumbersGenerator(amount) {
  const randomNumbers = [];
  for (let i = 0; i < amount; i++) {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumbers.push(numbers.sort());
  }
  return randomNumbers;
}

export default Lotto;
