import CONSTRAINTS from '../constants/Constraints';
import Lotto from '../Lotto';
import Validation from '../model/Validation';
import randomNumber from '../utils/randomNumber';
import Input from '../views/Input';
import Output from '../views/Output';

class LottoController {
  #lottoCount;

  #lottos;

  async inputLottoPrice() {
    const price = await Input.readPrice();
    const validation = new Validation(price);
    try {
      validation.validatePrice();
    } catch (err) {
      Output.printErrorMessage(err.message);
      await this.inputLottoPrice();
    }
    this.#lottoCount = price / CONSTRAINTS.PRICE_UNIT;
  }

  async purchaseLotto() {
    Output.printPurcahse(this.#lottoCount);
    await this.createLotto();
    Output.printLottos(this.#lottos);
  }

  async createLotto() {
    // this.#lottos = Array.from(
    //   { length: this.#lottoCount },
    //   () => new Lotto(randomNumber.createUniqueNumbers().sort((a, b) => a - b)),
    // );
    const numbers = [];
    for (let i = 0; i < this.#lottoCount; i += 1) {
      const lotto = randomNumber.createUniqueNumbers();
      const sortedLotto = lotto.sort((a, b) => a - b);
      numbers.push(sortedLotto);
    }
    this.#lottos = numbers.map((lotto) => new Lotto(lotto));
  }
}
export default LottoController;
