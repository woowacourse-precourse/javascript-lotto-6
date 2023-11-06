import { Console } from '@woowacourse/mission-utils';
import {
  LOTTO_NOTIFICATION_FORMAT,
  LOTTO_NOTIFICATION_MESSAGE,
  LOTTO_RESULT_FORMANT,
} from '../constants/LottoMessage.js';

export const printError = (error) => {
  Console.print(error);
};

export const printLottoNumbers = ({ lottoList, lottoAmount }) => {
  Console.print(LOTTO_NOTIFICATION_FORMAT.lottoAmount(lottoAmount));
  lottoList.forEach((lotto) => Console.print(lotto));
};

export const printLottoResults = (lottoResult, profit) => {
  Console.print(LOTTO_NOTIFICATION_MESSAGE.result);
  Object.values(LOTTO_RESULT_FORMANT).forEach((resultFormat, idx, origin) => {
    if (idx !== origin.length - 1) {
      return Console.print(resultFormat(lottoResult[idx]));
    }

    return Console.print(resultFormat(profit));
  });
};
