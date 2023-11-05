import { Random } from "@woowacourse/mission-utils";
import { LOTTO_NUMBER } from "../constants/constants";
import Lotto from "../Lotto";

function generateRandomLottoNumbers() {
  const randomNumbers = Random.pickUniqueNumbersInRange(
    LOTTO_NUMBER.START_RANGE,
    LOTTO_NUMBER.END_RANGE,
    LOTTO_NUMBER.NUMBERS_TO_PICK
  );
  return randomNumbers;
}

function sortedLottoNumbers(randomNumbers) {
  const sortedNumbers = randomNumbers.slice().sort((a, b) => a - b);
  return new Lotto(sortedNumbers);
}

function generateLottoNumbers() {
  const randomNumbers = generateRandomLottoNumbers();
  const sortedNumbers = sortedLottoNumbers(randomNumbers);
  return sortedNumbers;
}

export default generateLottoNumbers;
