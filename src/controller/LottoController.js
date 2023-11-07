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

  inputLottoPrice() {
    const price = Input.readPrice();
    const validation = new Validation(price);
    validation.validatePrice();
    this.setLottoCount(price / 1000);
  }
}
export default LottoController;
