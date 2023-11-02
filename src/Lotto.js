import UserInput from './view/userInput.js';

class Lotto {
  #numbers;

  constructor(amount, numbers) {
    // this.#validate(numbers);
    // this.#numbers = numbers;
    this.amount = amount;
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  print() {
    console.log(this.amount);
  }
}

export default Lotto;
