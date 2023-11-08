const LOTTO_MINNUMBER = 1;
const LOTTO_MAXNUMBER = 45;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort(function (a, b) {
      return a - b;
    });
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    let duplicate = false;
    const tempNumbers = new Set(numbers);

    if (tempNumbers.size !== numbers.length) {
      duplicate = true;
    }

    if (duplicate) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }

    numbers.forEach((element) => {
      if (element > LOTTO_MAXNUMBER || element < LOTTO_MINNUMBER) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  get lottoNumbers() {
    return JSON.parse(JSON.stringify(this.#numbers));
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
