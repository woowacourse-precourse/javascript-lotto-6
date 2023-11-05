import { Random } from "@woowacourse/mission-utils";
import { LOTTO_NUMBER } from "../constants/constants";
import Lotto from "../Lotto";

function generateLottoNumbers() {
  const randomNumbers = Random.pickUniqueNumbersInRange(
    LOTTO_NUMBER.START_RANGE,
    LOTTO_NUMBER.END_RANGE,
    LOTTO_NUMBER.NUMBERS_TO_PICK
  );
  return new Lotto(randomNumbers);
}

export default generateLottoNumbers;
