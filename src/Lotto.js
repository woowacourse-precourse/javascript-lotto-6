import UserInput from './view/userInput.js';

class Lotto {
  #numbers;

  constructor(amount, lottoNumbers, numbers) {
    // this.#validate(numbers);
    this.amount = amount;
    this.lottoNumbers = lottoNumbers;
    this.#numbers = numbers;
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  print() {
    console.log(this.amount);
    console.log(this.lottoNumbers);
    console.log(this.#numbers);
  }
}

export default Lotto;
