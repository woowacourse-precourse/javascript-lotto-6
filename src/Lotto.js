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
    if (this.duplicate(numbers)){
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.")
    }
  }

  checkWin(winNum, bonusNum){ 
    let winnernumber = winNum.map(num => parseInt(num, 10));
    let winnercounting = this.#numbers.filter(numbers => winnernumber.includes(numbers)).length;
    if (winnercounting >= 3){
      if (winnercounting == 3) return 0;
      if (winnercounting == 4) return 1;
      if (winnercounting == 5) {
        return this.checkBonus(bonusNum);
      }
      if (winnercounting == 6) return 4;
    }
    
  }

  checkBonus(bonusNum){ // 보너스 번호 없으면 2, 있으면 3을 리턴
    let bonuscorrect = this.#numbers.includes(bonusNum);
    if (!bonuscorrect) return 2;
    if (bonuscorrect) return 3;
  }

  duplicate(numbers){
    return new Set(numbers).size !== numbers.length;
  }
}

export default Lotto;