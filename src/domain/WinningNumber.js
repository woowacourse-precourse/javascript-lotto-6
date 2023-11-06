import { Lotto } from './Lotto';

export class WinningNumber extends Lotto {
  #bonus;
  constructor(winninglotto, bonus) {
    super(winninglotto);
    this.#bonus = bonus;
  }

  checkprint() {
    console.log(this.#bonus);
  }
}
