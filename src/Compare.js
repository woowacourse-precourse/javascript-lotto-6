class Compare {
  #eachLotto = [];
  #winLotto = [];
  #bonus = 0;
  #sameNum = 0;
  #sameBonus = false;

  constructor(each, win, bonus) {
    this.#eachLotto = each;
    this.#winLotto = win;
    this.#bonus = bonus;
  }

  compareLotto() {
    this.#eachLotto.forEach((num) => {
      this.conpareNum(num);
    });
  }

  conpareNum(num) {
    if (this.#winLotto.includes(num)) {
      this.#sameNum++;
    }
    if (num == this.#bonus) {
      this.#sameBonus = true;
    }
  }

  getResultObject() {
    return {
      sameNum: this.#sameNum,
      sameBonus: this.#sameBonus,
    };
  }
}

export default Compare;
