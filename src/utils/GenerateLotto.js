import { Random } from "@woowacourse/mission-utils";
import { MAXIMUM_LOTTO_NUMBER, MINIMUM_LOTTO_NUMBER, LOTTO_LENGTH } from "../constants/LottoConstants.js"

const generateLotto = () => {
    const newLotto = Random.pickUniqueNumbersInRange(MINIMUM_LOTTO_NUMBER, MAXIMUM_LOTTO_NUMBER, LOTTO_LENGTH);
    return newLotto;
}

export default generateLotto;