class Lotto {
  #numcheck;

  constructor(numcheck) {
    this.#validate(numcheck);
    this.#numcheck = numcheck;
  }

  #validate(numcheck) {
    if (numcheck.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (this.duplicate(numcheck)){
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.")
    }
  }

  checkWin(winNum, bonusNum){ 
    let winnernumber = winNum.map(num => parseInt(num, 10));
    let winnercounting = this.#numcheck.filter(numcheck => winnernumber.includes(numcheck)).length;
    if (winnercounting >= 3){
      if (winnercounting == 3) return 0;
      if (winnercounting == 4) return 1;
      if (winnercounting == 5) {
        return this.checkBonus(bonusNum);
      }
      if (winnercounting == 6) return 4;
    }
    
  }

  checkBonus(bonusNum){ 
    let bonuscorrect = this.#numcheck.includes(bonusNum);
    if (!bonuscorrect) return 2;
    if (bonuscorrect) return 3;
  }

  duplicate(numcheck){
    return new Set(numcheck).size !== numcheck.length;
  }
}

export default Lotto;