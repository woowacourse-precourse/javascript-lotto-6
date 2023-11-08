import { MissionUtils } from "@woowacourse/mission-utils";
import OPTIONS from "../constant/option";

const generateLottoRandomNumbers = () => {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(OPTIONS.minRandomNumber, OPTIONS.maxRandomNumber, OPTIONS.randomCount);
    return randomNumbers;
}

const sortedLottoNumbers = () => {
    const getRandomNumbers = generateLottoRandomNumbers();
    const sortedRandomNumbers = getRandomNumbers.sort((a, b) => a - b);
    return sortedRandomNumbers;
}

export default sortedLottoNumbers;