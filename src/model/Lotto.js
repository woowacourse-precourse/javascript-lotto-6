import Output from "../view/Output.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortLotto();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const dupCheck = new Set(numbers);
    if(dupCheck.size !== numbers.length) throw new Error("[ERROR] 로또 번호 중복");
  }

  getNumbers(){
    return this.#numbers;
  }

  #sortLotto(){
    this.#numbers.sort((a,b) => a-b);
  }

  printLotto(){
    const formatedMessage = this.#numbers.join(', ');
    Output.outputMessage(`[${formatedMessage}]`);
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
