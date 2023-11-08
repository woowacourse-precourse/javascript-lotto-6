import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_NUMBER_COUNT,
} from "./constant/LottoInfo.js";

function RandomNumber(count) {
  let lottoNumberList = [];
  for (let i = 0; i < count; i++) {
    let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_MIN,
      LOTTO_NUMBER_MAX,
      LOTTO_NUMBER_COUNT
    );
    lottoNumber.sort((a, b) => a - b);
    lottoNumberList.push(new Lotto(lottoNumber));
  }
  return lottoNumberList;
}

export default RandomNumber;
