import Output from "../view/Output.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortLotto();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #sortLotto(){
    this.#numbers.sort();
  }

  #printLotto(){
    Output.outputMessage(this.#numbers);
  }
}

export default Lotto;
