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
    //number.length ==6을 충족시켰을 경우, 
    for (var i = 0; i < 6; i++) {
      const firstnum = numbers[i];

      for (let j = i + 1; j < numbers.length; j++) {
        if (firstnum === numbers[j]) {
          throw new Error("[Error]로또 번호는 중복되는 값을 입력할 수 없습니다.");
        }
      }
    } //예외 1. 로또번호는 중복될 수 없다
    for (let k = 0; k < numbers.length; k++) {
      if (numbers[k] < 1 || numbers[k] > 45) {
        throw new Error("[Error] 로또 숫자 범위는 1에서 45 사이를 벗어날 수 없습니다.");
      }
    }
    //예외 2. 로또 숫자 범위는 1에서 45 사이이다. 
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
