import Lotto from "../Lotto.js";
import CONDITION from "../constants/condition.js";

const publishUtils = {
  calculateAmount(purchasePrice) {
    const amountOfLotto = purchasePrice / CONDITION.unit.price;
    return amountOfLotto;
  },
  createLotto(lottoNums) {
    // 오름차순 정렬
    lottoNums.sort((a, b) => a - b);
    return new Lotto(lottoNums);
  },
};

export default publishUtils;
