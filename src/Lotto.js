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
    const set = new Set(numbers);
    if(set.size !== numbers.length) throw new Error("[ERROR] 중복된 번호가 포함되어 있습니다. "); 
  }

  get numbers() {
    return this.#numbers;
  } 

  prizeResult(winnerNumber, bonusNumber) {
    let three_match = 0, four_match = 0, five_match = 0, five_match_plus_bonusBall =0, six_match = 0;
    let count = 0;
    
    for(let i = 0; i < this.#numbers.length; i++) {
      for(let j = 0; j < winnerNumber.length; j++) {
        if( winnerNumber[j] === this.#numbers[i]) {
          count++;
        }
      }
    }
    const found = this.#numbers.find((element) => element === bonusNumber);

    if(count === 3) three_match = 1;
    if(count === 4) four_match = 1;
    if(count === 5 && found !== bonusNumber) five_match = 1;
    if(count === 5 && found === bonusNumber) five_match_plus_bonusBall = 1;
    if(count === 6) six_match = 1;

    return [three_match, four_match, five_match, five_match_plus_bonusBall, six_match];
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
