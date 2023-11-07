import { MissionUtils } from "@woowacourse/mission-utils";

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
  }

  static makeLotto(){
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    return new Lotto(numbers);
  }

  getLotto(){
    return this.#numbers;
  }

  checkLottoWinning(winningNumbers, bonusNumber){
    let count = 0, bonus = 0;
    for(let i = 0; i < 6; i++){
      if(winningNumbers.includes(this.#numbers[i])){
        count++;
        continue;
      }
      if(this.#numbers[i] === bonusNumber){
        bonus++;
      }
    }
    return this.getWinningResult(count, bonus);
  }
  
  getWinningResult(count, bonus){
    if(count === 3){
      return 0;
    }
    if(count === 4){
      return 1;
    }
    if(count === 5 && !bonus){
      return 2;
    }
    if(count === 5 && bonus){
      return 3;
    }
    if(count === 6){
      return 4;
    }
  }
}

export default Lotto;
