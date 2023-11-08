class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#isNumValid(numbers);
    this.#isNumBoundaryValid(numbers);
    this.#isSameValid(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {  // 번호가 6개가 아니면 예외 처리
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #isNumValid(numbers) {  // 정수가 아니면 예외 처리
    for (var i = 0; i < numbers.length; i++){
      if(numbers[i] % 1 !== 0) {
        throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
      }
    }
  }

  #isNumBoundaryValid(numbers) {  // 1~45 사이의 숫자가 아니면 예외 처리
    for (var i = 0; i < numbers.length; i++){
      if(numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
      }
    }
  }

  #isSameValid(numbers) {  // 중복되는 숫자가 있으면 예외 처리
    var numSet = new Set(numbers);

    if(numbers.length !== numSet.size) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  getNumbers(){
    return this.#numbers;
  }
}

export default Lotto;
