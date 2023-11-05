import { Random } from "@woowacourse/mission-utils";

const Utils = {
  genRandomLottoNumber: () => Random.pickUniqueNumbersInRange(1, 45, 6),
};

export default Utils;
