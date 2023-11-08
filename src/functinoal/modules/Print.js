import { Console } from '@woowacourse/mission-utils';

import CONSTANTS from '../../constants/CONSTANTS.js';

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
  LOTTO_NUMBERS_SEPARATOR,
  DASH,
  SPACE,
  BLANK,
  UNIT_OF_LOTTO,
} = CONSTANTS;

class Print {
  static purchasedLotto(lottoArray) {
    Console.print(`${lottoArray.length}${PURCHASED_LOTTO_FORMAT}`);
    lottoArray.forEach(Print.lottoNumbers);
  }

  static lottoNumbers(lotto) {
    const PRINT_SEPARATOR = `${LOTTO_NUMBERS_SEPARATOR}${SPACE}`;
    Console.print(
      `${LOTTO_FRONT_COVER}${lotto
        .getNumbers()
        .join(PRINT_SEPARATOR)}${LOTTO_BEHIND_COVER}`
    );
  }

  static errorMessage(error) {
    Console.print(error.message);
  }

  static lottoResult(resultArray) {
    Console.print(LOTTO_RESULT_HEADER);
    Console.print(`${DASH}${DASH}${DASH}`);
    Print.fifthPlaceResult(resultArray);
    Print.fourthPlaceResult(resultArray);
    Print.thirdPlaceResult(resultArray);
    Print.secondPlaceResult(resultArray);
    Print.firstPlaceResult(resultArray);
  }

  static returnRatio(returnRatio) {
    Console.print(
      `${RETURN_RATIO_HEADER}${returnRatio.toFixed(1)}${RETURN_RATIO_FOOTER}`
    );
  }

  static fifthPlaceResult(resultArray) {
    Console.print(
      `${FIFTH_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${
        resultArray[6] + resultArray[7]
      }${UNIT_OF_LOTTO}`
    );
  }

  static fourthPlaceResult(resultArray) {
    Console.print(
      `${FOURTH_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${
        resultArray[8] + resultArray[9]
      }${UNIT_OF_LOTTO}`
    );
  }

  static thirdPlaceResult(resultArray) {
    Console.print(
      `${FOURTH_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${resultArray[10]}${UNIT_OF_LOTTO}`
    );
  }

  static thirdPlaceResult(resultArray) {
    Console.print(
      `${THIRD_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${resultArray[10]}${UNIT_OF_LOTTO}`
    );
  }

  static secondPlaceResult(resultArray) {
    Console.print(
      `${SECOND_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${resultArray[11]}${UNIT_OF_LOTTO}`
    );
  }

  static firstPlaceResult(resultArray) {
    Console.print(
      `${FIRST_PLACE_RESULT_HEADER}${SPACE}${DASH}${SPACE}${resultArray[12]}${UNIT_OF_LOTTO}`
    );
  }

  static lineBreak() {
    Console.print(BLANK);
  }
}

export default Print;
