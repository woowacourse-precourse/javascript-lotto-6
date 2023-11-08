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

    if(numbers.filter((number,index) => numbers.indexOf(number) !== index).length !== 0){
      throw new Error("[ERROR] 중복된 숫자가 있습니다.")
    }

  }

  // TODO: 추가 기능 구현
  getNumbers(){
    return this.#numbers
  }
}

export default Lotto;
