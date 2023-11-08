import { LOTTO, MESSAGE } from "../common/constants.js";
import { print } from "../common/utils.js";

export const printQuantity = async (lottoQuantity) => {
  print(MESSAGE.PURCHASE_QUANTITY(lottoQuantity));
};

export const printLottoResult = async (lottoResultArray, lottoSumReturn) => {
  print(MESSAGE.WINNING_STATISTICS);
  print(MESSAGE.UNDERLINE);
  print(
    `${MESSAGE.FIFTH_PLACE}${lottoResultArray[LOTTO.FIFTH_PLACE]}${MESSAGE.EA}`
  );
  print(
    `${MESSAGE.FOURTH_PLACE}${lottoResultArray[LOTTO.FOURTH_PLACE]}${
      MESSAGE.EA
    }`
  );
  print(
    `${MESSAGE.THIRD_PLACE}${lottoResultArray[LOTTO.THIRD_PLACE]}${MESSAGE.EA}`
  );
  print(
    `${MESSAGE.SECOND_PLACE}${lottoResultArray[LOTTO.SECOND_PLACE]}${
      MESSAGE.EA
    }`
  );
  print(
    `${MESSAGE.FIRST_PLACE}${lottoResultArray[LOTTO.FIRST_PLACE]}${MESSAGE.EA}`
  );
  print(MESSAGE.TOTAL_RETURN(lottoSumReturn));
};

export const printErrorMessage = async (e) => {
  print(e.message);
};
