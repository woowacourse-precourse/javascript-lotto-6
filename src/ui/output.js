import { Console } from '@woowacourse/mission-utils';

import { outputMessages } from '../message/ui.js';

export const printLottoNumbers = (lottoNumbers) => {
  Console.print(outputMessages.BUY(lottoNumbers.length));
  lottoNumbers.forEach((lottoNumber) => {
    Console.print(lottoNumber.toString());
  });
};

export const printWinningLotto = (winningLotto) => {
  let res = '';
  res += outputMessages.FIF(winningLotto[0]);
  res += outputMessages.FOR(winningLotto[1]);
  res += outputMessages.THI(winningLotto[2]);
  res += outputMessages.SEC(winningLotto[3]);
  res += outputMessages.FIR(winningLotto[4]);
  Console.print(outputMessages.RESULT(res));
};

export const printBenefit = (benefit) => {
  Console.print(outputMessages.BENEFIT(benefit));
};
