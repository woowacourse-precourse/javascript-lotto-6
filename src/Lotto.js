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
    this.isNumber(numbers);
    const set = new Set([...numbers]);
    if(set.size !== numbers.length) {
      throw new Error("[ERROR]");
    }
    this.rangeException(numbers);
  }

  rangeException(numbers) {
    for(let i=0;i<numbers.length;i++) {
      if(numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 1이상 45이하의 값을 입력해주세요.");
      }
    }
  }

  isNumber(numbers) {
    const REX = /[0-9]/;
    for(let i=0;i<numbers.length;i++) {
      if(!REX.test(numbers[i])) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
      }
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
