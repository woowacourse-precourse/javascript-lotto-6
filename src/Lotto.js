import Validations from "./Validations";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validations.hasSpace(numbers);
    const numbersArray = numbers.split(",").map((number) => Number(number));
    numbersArray.forEach((number) => {
      Validations.isNumber(number);
      Validations.isInRange(number);
      Validations.isInteger(number);
    });
    Validations.isNotDuplicated(numbersArray);
    Validations.isProperLength(numbersArray);
  }
  
}

export default Lotto;
