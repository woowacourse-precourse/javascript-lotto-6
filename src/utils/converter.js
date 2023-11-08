import { LOTTO } from '../constants/api';
import { ERROR_MESSAGE } from '../constants/message';
import validator from './validator';

const converter = {
  numbericStringToNumber(input) {
    if (!validator.isNumericString(input)) {
      throw new Error(ERROR_MESSAGE.DEFAULT);
    }
    return Number(input);
  },

  numberToDisplayFormatString(number) {
    if (typeof number !== 'number') {
      throw new Error(ERROR_MESSAGE.DEFAULT);
    }

    const numberStr = String(number);

    // 정규표현식을 사용하여 3자리마다 쉼표 추가
    return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  stringToArray(stringArray) {
    return stringArray.split(LOTTO.POINT_TO_DIVIDE_INPUTS);
  },
}

export default converter;
