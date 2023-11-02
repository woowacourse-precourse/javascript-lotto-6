import UserInput from './view/userInput.js';

class Lotto {
  #numbers;

  constructor(amount, lottoNumbers, numbers) {
    // this.#validate(numbers);
    // this.#numbers = numbers;
    this.amount = amount;
    this.lottoNumbers = lottoNumbers;
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  print() {
    console.log(this.amount);
    console.log(this.lottoNumbers);
  }
}

export default Lotto;
