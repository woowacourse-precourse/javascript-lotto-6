import { MissionUtils } from "@woowacourse/mission-utils";

class GenerateLottoNumbers {
  makeNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a -b);
    return numbers;
  }

  lottoNumberInfo(lottoCost) {
    const lottoArr = [];
    const lottoCount = lottoCost / 1000;
    for (let i = 0; i < lottoCount; i++) lottoArr.push(this.makeNumber());
    return [lottoCount, lottoArr];
  }
}

export default GenerateLottoNumbers;
