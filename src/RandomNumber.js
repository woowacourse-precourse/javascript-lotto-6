import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
function RandomNumber(count) {
  let lottoNumbers = [];

  for (let i = 0; i < count; i++) {
    let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort((a, b) => a - b);
    lottoNumbers.push(new Lotto(lottoNumber));
  }

  return lottoNumbers;
}

export default RandomNumber;
