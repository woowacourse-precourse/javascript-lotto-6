import { MissionUtils } from "@woowacourse/mission-utils";
import { RANDOM_COUNT, RANDOM_MAX, RANDOM_MIN } from "../constant/constant";

const generateLottoRandomNumbers = () => {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(RANDOM_MIN, RANDOM_MAX, RANDOM_COUNT);
    return randomNumbers;
}

const sortedLottoNumbers = () => {
    const getRandomNumbers = generateLottoRandomNumbers();
    const sortedRandomNumbers = getRandomNumbers.sort((a, b) => a - b);
    return sortedRandomNumbers;
}

export default sortedLottoNumbers;