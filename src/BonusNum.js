class BonusNum {
  #num;

  constructor(input) {
    this.#validate(input);
    this.#num = input;
  }

  #validate(input) {
    if (isNaN(Number(input))) {
      throw new Error("[ERROR]숫자를 입력해 주세요.");
    }
  }

  returnNum() {
    return this.#num;
  }
}

export default BonusNum;
