import Input from './user/Input.js';

class Game {
  #pricePaid;
  #boughtLottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#pricePaid = this.#setPrice();
  }

  #setPrice() {
    while (true) {
      const price = Input.getPriceInput();
      return price;
    }
  }
};

export default Game;