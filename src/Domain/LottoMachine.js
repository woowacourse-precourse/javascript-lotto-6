import { Random } from '@woowacourse/mission-utils';

const LottoMachine = {
  drawLottos(purchaseAmount) {
    const purchasedLottos = [];
    const numberOfLottos = purchaseAmount / 1000;

    for (let i = 0; i < numberOfLottos; i++) {
      purchasedLottos.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );
    }

    return purchasedLottos;
  },
};

export default Object.freeze(LottoMachine);
