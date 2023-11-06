import LottoView from './LottoView.js';
import LottoMachine from './LottoMachine.js';
import Validation from './Validation.js';

const MESSAGE_PURCHASE_AMOUNT = '구입금액을 입력해 주세요.\n';

class Customer {
  #money;

  async buyLotto() {
    const money = await LottoView.getUserInput(MESSAGE_PURCHASE_AMOUNT);
    if (!Validation.isProperPurchaseAmount(money)) {
      throw new Error('[ERROR] 로또 구입 금액이 잘못되었습니다.');
    }

    this.#money = money;
    const lottoMachine = new LottoMachine();
    const lottoBundle = lottoMachine.issueLotto(this.#money);
    LottoView.printLottoBundle(lottoBundle);
  }
}
export default Customer;
