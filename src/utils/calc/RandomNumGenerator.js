import { Random } from "@woowacourse/mission-utils";
import { STATIC_NUMBER } from "../../static/Static.js";

const RandomNumGenerator = {
  generateRandomNumArr() {
    return Random.pickUniqueNumbersInRange(
      STATIC_NUMBER.minLottoNum,
      STATIC_NUMBER.maxLottoNum,
      STATIC_NUMBER.LottoNumLen
    );
  },
};

export default RandomNumGenerator;
