import { MissionUtils } from "@woowacourse/mission-utils";

function makeLottoNumber() {
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  lottoNumber.sort(function (a, b) {
    return a - b;
  });
  return lottoNumber;
}

export default makeLottoNumber;
