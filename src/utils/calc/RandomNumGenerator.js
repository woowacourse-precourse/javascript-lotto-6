import { Random } from "@woowacourse/mission-utils";
import { STATIC_NUMBER } from "../../static/Static.js";

const RandomNumGenerator = {
  generateRandomNum() {
    return Random.pickNumberInRange(
      STATIC_NUMBER.minLottoNum,
      STATIC_NUMBER.maxLottoNum
    );
  },
};

export default RandomNumGenerator;
