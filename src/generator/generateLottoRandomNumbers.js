const { MissionUtils } = require("@woowacourse/mission-utils");

const generateLottoRandomNumbers = () => {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
}

const sortedLottoNumbers = () => {
    const getRandomNumbers = generateLottoRandomNumbers();
    const sortedRandomNumbers = getRandomNumbers.sort((a, b) => a - b);
    return sortedRandomNumbers;
}

export default sortedLottoNumbers;