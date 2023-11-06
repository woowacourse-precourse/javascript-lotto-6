class Bonus {
  #bonus;

  constructor(bonus, numbers){
    this.#bonus = bonus;
    this.#validate(bonus, numbers);
  }

  #validate(bonus, numbers){
    if (!/\d/.test(bonus)){
        throw new Error('[ERROR] 숫자를 입력해 주세요.')
      } else if (bonus <= 0  || bonus > 45 ) {
        throw new Error('[ERROR] 1 ~ 45 사이의 숫자여야 합니다.')
      } else if (numbers.includes(bonus)){
        throw new Error('[ERROR] 보너스 값이 당첨 번호와 중복되선 안됩니다.')
      }
  }
}

export default Bonus;