import printWinningLotto from "./ui/PrintWinningLotto.js";

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = [];
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  async print() {
    const lottoNumbers = await printWinningLotto();
    this.#validate(lottoNumbers);
    this.#numbers = lottoNumbers;
    console.log(this.#numbers);
  }

  main() {
    this.print();
  }
}

export default Lotto;
