import UserInput from './view/userInput.js';

class Lotto {
  #numbers;

  constructor(amount, lottoNumbers, numbers, bonus) {
    // this.#validate(numbers);
    this.amount = amount;
    this.lottoNumbers = lottoNumbers;
    this.#numbers = numbers;
    this.bonus = bonus;
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
    console.log(this.bonus);
  }
}

export default Lotto;
