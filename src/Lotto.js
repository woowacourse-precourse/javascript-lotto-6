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
  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new Error("[ERROR] 중복된 로또 번호가 있습니다.");
  }

  numbers.forEach(number => {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  });
}

getNumbers() {
  return Array.from(this.#numbers)
}

static generateRandom() {
  // 중복을 피하며 6개의 번호를 랜덤으로 생성
  const numbers = new Set();

  while (numbers.size < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    numbers.add(num);
  }

  return Array.from(numbers); // Set을 배열로 변환하여 반환
}
}

export default Lotto;
