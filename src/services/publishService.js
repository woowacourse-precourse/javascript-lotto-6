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
      const LottoNum = this.sortArray(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      LottoNums.push(LottoNum);
    }
    return LottoNums;
  },

  // 정렬 함수
  sortArray(array) {
    return array.sort((a, b) => a - b);
  },

  // 로또 객체 생성
  createLottos(LottoNums) {
    const lottos = [];
    LottoNums.map((lottoNum) => {
      lottos.push(new Lotto(lottoNum));
    });
    return lottos;
  },
};

export default publishService;
