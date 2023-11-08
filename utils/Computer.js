import { Random } from "@woowacourse/mission-utils";

const Computer = {
  getRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

export default Computer;
