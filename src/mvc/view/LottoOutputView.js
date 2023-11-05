import { Console } from '@woowacourse/mission-utils';

import STRINGS from '../../constants/STRINGS.js';

const {
  PURCHASED_LOTTO_FORMAT,
  LOTTO_FRONT_COVER,
  LOTTO_BEHIND_COVER,
  LOTTO_RESULT_HEADER,
  FIRST_PLACE_RESULT_HEADER,
  SECOND_PLACE_RESULT_HEADER,
  THIRD_PLACE_RESULT_HEADER,
  FOURTH_PLACE_RESULT_HEADER,
  FIFTH_PLACE_RESULT_HEADER,
  RETURN_RATIO_HEADER,
  RETURN_RATIO_FOOTER,
  DASH,
  SPACE,
  UNIT_OF_LOTTO,
} = STRINGS;

class LottoOutputView {
  printPurchasedLotto(lottoArray) {
    Console.print(`${lottoArray.length}${PURCHASED_LOTTO_FORMAT}`);
    lottoArray.forEach(this.printLottoNumbers);
  }

  printLottoNumbers(lotto) {
    Console.print(
      `${LOTTO_FRONT_COVER}${lotto
        .getNumbers()
        .join(', ')}${LOTTO_BEHIND_COVER}`
    );
  }

  printErrorMessage(error) {
    Console.print(error.message);
  }

  printLottoResult(resultArray) {
    Console.print(LOTTO_RESULT_HEADER);
    Console.print(`${DASH}${DASH}${DASH}`);
    this.#fifthPlaceResult(resultArray);
    this.#fourthPlaceResult(resultArray);
    this.#thirdPlaceResult(resultArray);
    this.#secondPlaceResult(resultArray);
    this.#firstPlaceResult(resultArray);
  }

  printLottoReturnRatio(returnRatio) {
    Console.print(
      `${RETURN_RATIO_HEADER}${returnRatio.toFixed(1)}${RETURN_RATIO_FOOTER}`
    );
  }

  printLineBreak() {
    Console.print('');
  }

  #fifthPlaceResult(resultArray) {
    Console.print(
      `${FIFTH_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${
        resultArray[6] + resultArray[7]
      }${UNIT_OF_LOTTO}`
    );
  }

  #fourthPlaceResult(resultArray) {
    Console.print(
      `${FOURTH_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${
        resultArray[8] + resultArray[9]
      }${UNIT_OF_LOTTO}`
    );
  }

  #thirdPlaceResult(resultArray) {
    Console.print(
      `${THIRD_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${resultArray[10]}${UNIT_OF_LOTTO}`
    );
  }

  #secondPlaceResult(resultArray) {
    Console.print(
      `${SECOND_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${resultArray[11]}${UNIT_OF_LOTTO}`
    );
  }

  #firstPlaceResult(resultArray) {
    Console.print(
      `${FIRST_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${resultArray[12]}${UNIT_OF_LOTTO}`
    );
  }
}

export default LottoOutputView;
