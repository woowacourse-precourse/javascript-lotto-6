class Purchase {
  #purchaseAmount;
  
  constructor(userInput) {
    this.#purchaseAmount = userInput;
    this.#validate(userInput);
  }

  #validate(userInput) {
    if (!Number(userInput)) {
      throw new Error("[ERROR] 문자는 포함될 수 없습니다.");
    }
    if(userInput % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
    }
    if(userInput === 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원부터 입력 가능합니다.");
    }
  }
}