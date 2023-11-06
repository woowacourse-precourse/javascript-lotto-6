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
    const set = new Set([...numbers]);
    if(set.size !== numbers.length) {
      throw new Error("[ERROR]");
    }
  }

  showLotto() {
    return `${this.#numbers.join(",")}\n`;
  }
  // TODO: 추가 기능 구현

  getNumbers() {
    return this.#numbers;
  }

  matchNums ( winningNums, bonusNum ) {
    let matches = -3;
    winningNums.forEach(v=>{
      if(this.#numbers.includes(v)) matches++;
    });   
    if(matches < 0) return -1;
    if(matches === 5 && this.#numbers.includes(bonusNum))  return matches+1;
    return matches;
  }

}

export default Lotto;
