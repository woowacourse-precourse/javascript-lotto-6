import { MissionUtils } from "@woowacourse/mission-utils";

const Random = MissionUtils.Random;

function lottoNumbers() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumber;
}

export { lottoNumbers };