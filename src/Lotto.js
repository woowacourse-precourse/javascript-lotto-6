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
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if(numbers.some(number=>number<1) || numbers.some(number=>number>45)){
      throw new Error("[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다.")
    }
  }

  getNumber() {
    return this.#numbers;
  }

  match(winNumber) {
    return this.#numbers.filter(number => winNumber.includes(number)).length;
  }
  
}

export default Lotto;
