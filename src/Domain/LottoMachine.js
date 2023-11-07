import LottoUi from '../Ui/LottoUi';
import { Random } from '@woowacourse/mission-utils';

const LottoMachine = {
  async purchaseLotto() {
    const purchaseAmount = await LottoUi.inputPurchaseAmount();
    const purchasedLottos = this.drawLottos(purchaseAmount);
    LottoUi.printPurchasedLottos(purchasedLottos);

    return purchasedLottos;
  },

  drawLottos(purchaseAmount) {
    const purchasedLottos = [];
    const numberOfLottos = purchaseAmount / 1000;

    for (let i = 0; i < numberOfLottos; i++) {
      purchasedLottos.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );
    }

    LottoUi.alertFinishdrawLottos(numberOfLottos);

    return purchasedLottos;
  },
};

export default Object.freeze(LottoMachine);
