import { Console, Random } from "@woowacourse/mission-utils";

const Utils = {
  genRandomLottoNumber: () => Random.pickUniqueNumbersInRange(1, 45, 6),
  splitInput: (input) => input.split(",").filter((element) => element !== ""),
};

export default Utils;
