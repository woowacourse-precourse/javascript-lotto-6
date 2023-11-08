class Money {
  #money;

  #result= {'3개 일치' : 0, '4개 일치':0,'5개 일치':0,'5개 일치, 보너스 볼 일치':0,'6개 일치':0};

  constructor(money) {
    
    this.#money = this.#stringToNumber(money);
    this.#validate(this.#money);
    
  }

  #validate(money) { 
    if (Number.isNaN(money)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (money < 1000) {
      throw new Error("[ERROR] 로또 구매 최소 금액은 1000원 입니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000 단위여야합니다.");
    }
  
  }

  #stringToNumber(money) {
    return Number(money);
  }

  getMoney() {
    return this.#money;
  }

  getResult() {
    return this.#result;
  }
}

export default Money;