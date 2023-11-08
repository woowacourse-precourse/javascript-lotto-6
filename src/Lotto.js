class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    let arr = numbers.map(Number)
    if (arr.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    arr = [...new Set(arr)]
    if (arr.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
    arr.map((a)=> {
      if(a < 1 || a > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45사이의 값이어야 합니다.");
      }
    })
    if (arr.indexOf(NaN) !== -1) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
  }
  
  validateNumbers(numbers) {
    let arr = numbers.map(Number)
    arr = [...new Set(arr)]
    if (arr.indexOf(NaN) !== -1) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (arr.length !== 7) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
    arr.map((a)=> {
      if(a < 1 || a > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45사이의 값이어야 합니다.");
      }
    })
    return arr
  }
}

export default Lotto;
