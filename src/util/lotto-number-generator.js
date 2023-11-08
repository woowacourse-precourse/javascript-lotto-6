import { Random } from "@woowacourse/mission-utils";

const randomNumberGenerator = () => {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
};

const lottoNumberGenerator = () => {
    const lottoNumbers = randomNumberGenerator();
    return lottoNumbers.sort((a, b) => a - b);
};

export default lottoNumberGenerator;