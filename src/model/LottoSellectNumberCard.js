const TRUE = true;

class LottoSellectNumberCard {
  #auto
  #name

  constructor() {
    this.#auto = false;
    this.#name = 'LottoSellectNumberCard';
  }
  autoSelect() {
    this.#auto = TRUE;
  }
  getAutoSignStatus() {
    if (this.#auto === TRUE) {
      return (this.#auto);
    }
  }
  getName() {
    return (this.#name);
  }
}

export default LottoSellectNumberCard;