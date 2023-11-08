import Validation from '../domain/Validation';
import Input from '../views/Input';

class LottoController {
  #lottoCount;

  play() {
    this.inputLottoPrice();
  }

  setLottoCount(lottoCount) {
    this.#lottoCount = lottoCount;
  }

  async inputLottoPrice() {
    const price = await Input.readPrice();
    const validation = new Validation(price);
    try {
      validation.validatePrice();
    } catch {
      await this.inputLottoPrice();
    }
    this.setLottoCount(price / 1000);
  }
}
export default LottoController;
