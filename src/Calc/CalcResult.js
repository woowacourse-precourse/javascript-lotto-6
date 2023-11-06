import { PRICE_LENGTH } from "../utils/constants.js";

export const calcResult = (lotto_list, winning_number, bonus_number) => {
  let result = Array.from({ length: PRICE_LENGTH }, () => 0);

  lotto_list.map((lotto) => {
    let correct_number = lotto.filter((num) =>
      winning_number.includes(num)
    ).length;

    if (correct_number === 3) {
      result[4]++;
    } else if (correct_number === 4) {
      result[3]++;
    } else if (correct_number === 5) {
      if (lotto.includes(bonus_number)) {
        result[1]++;
      } else {
        result[2]++;
      }
    } else if (correct_number === 6) {
      result[0]++;
    }
  });

  return result;
};
