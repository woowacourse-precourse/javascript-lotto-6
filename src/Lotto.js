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
    if(numbers.length !== new Set(numbers).size){
      throw new Error("[ERROR] 1~45 사이의 중복되지 않는 6개의 숫자를 입력해주세요.");
    }
    if(numbers.some(number=>number<1) || numbers.some(number=>number>45)){
      throw new Error("[ERROR] 1~45 사이의 숫자 형식의 입력만 가능합니다.")
    }
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
