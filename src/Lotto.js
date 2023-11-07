class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#isNumber(numbers);
    this.#isDuplicate(numbers);
    this.#isRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #isNumber(numbers){
    for(let i = 0; i< 6 ; i++){
      if(isNaN(Number(numbers[i]))){
        throw new Error("[ERROR] 숫자가 아닌 값이 존재합니다.");
      }
    }
  }

  #isDuplicate(numbers){
    const setNumbers = new Set(numbers);
    if(setNumbers.size !== 6){
      throw new Error("[ERROR] 중복된 값이 존재합니다");
    }
  }

  #isRange(numbers){
    for(let i = 0; i< 6 ; i++){
      if (Number(numbers[i]) > 45 
      || Number(numbers[i]) < 1) {
        throw new Error("[ERROR] 당첨 번호의 범위는 1~45 입니다.");
      }
    }
  }

  matchLotto(lotto){
    let count = 0;
    for(let i= 0 ; i< 6 ; i++){
      if(this.#numbers.includes(lotto[i])){
        count += 1;
      }
    }
    return count;
  }
  
}

export default Lotto;