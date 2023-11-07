import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import CONDITION from "../constants/condition.js";

const publishService = {
  // 발행 로또 수량 계산
  calculateAmount(price) {
    const amount = price / CONDITION.unit.price;
    return amount;
  },

  // 로또 번호 랜덤 생성
  publishLottos(amount) {
    const LottoNums = [];
    for (let i = 0; i < amount; i++) {
      const LottoNum = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      LottoNums.push(LottoNum);
    }
    return LottoNums;
  },
};

export default publishService;
