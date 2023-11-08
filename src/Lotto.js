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
    if (new Set(numbers).size !== 6){
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (numbers.some(number => number < 1 || number > 45)){
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.")
    }
  }

  // TODO: 추가 기능 구현
  compare(prizeNumber,bonusNumber){
    const matchCount = this.#numbers.filter(number => prizeNumber.includes(number)).length;
    const hasBonus = this.#numbers.includes(bonusNumber);
    if(matchCount === 6){
      return 1;
    }
    if(matchCount === 5 && hasBonus){
      return 2;
    }
    if(matchCount === 5){
      return 3;
    }
    if(matchCount === 4){
      return 4;
    }
    if(matchCount === 3){
      return 5;
    }
    return 0;
  }
}

export default Lotto;
