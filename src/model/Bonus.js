class Bonus {
  #numbers

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers){
    if(!Number(numbers)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
    if(!(numbers >=1 && numbers <= 45)) {
      throw new Error("[ERROR] 숫자는 1~45까지 입력해주세요.");
    }
  }
}

export default Bonus;