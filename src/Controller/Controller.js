import Input from '../View/Input';
import Output from '../View/Output';

class Controller {
  #amount;

  #winnginNum;

  #bonusNum;

  constructor() {
    this.input = new Input();
    this.output = new Output();
  }

  async buyLotto() {
    this.#amount = await this.input.inputPurchase();
    // 구입금액만큼 로또사기
    // 로또 출력
  }

  async inputWinningNum() {
    this.#winnginNum = await this.input.inputWinningNum();
    this.#bonusNum = await this.input.inputBonus();
  }
}

export default Controller;
