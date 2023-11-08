import { Console } from '@woowacourse/mission-utils';

import { outputMessages } from '../message/ui.js';

export const printLottoNumbers = (lottoNumbers) => {
  Console.print(outputMessages.BUY(lottoNumbers.length));
  lottoNumbers.forEach((lottoNumber) => {
    Console.print(lottoNumber.toString());
  });
};
