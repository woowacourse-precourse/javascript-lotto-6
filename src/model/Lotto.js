import { isValidLottoLength, isMadeWithUniqueNumber } from "../validator/lottoValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortLotto();
  }

  #validate(numbers) {
    isValidLottoLength(numbers.length);
    isMadeWithUniqueNumber(numbers);
  }

  #sortLotto(){
    this.#numbers.sort((a,b) => a-b);
  }
  
  toString(){
    const addDelimiter = this.#numbers.join(', ');
    return `[${addDelimiter}]`;
  }

  compareToWinningLotto(winningLotto, bonusNumber){
    let score = 0;
    winningLotto.getNumbers().forEach((num) => {
      if(this.#numbers.includes(num)) score += 1;
    })

    if(score === 5 && this.#numbers.includes(bonusNumber)) score += 0.5;
    return score;
  }
}

export default Lotto;
