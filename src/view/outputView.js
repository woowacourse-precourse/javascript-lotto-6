import { Console } from '@woowacourse/mission-utils';
import ERROR_PREFIX from '../constants/errorConstant.js';

export const outputIssueComment = (numberOfLotto) =>
  Console.print(`\n${numberOfLotto}개를 구매했습니다.`);
export const outputLottoNummbers = (lottoList) => {
  lottoList.forEach((lotto) => lotto.printNumbers());
};
const outputMatchingComments = [
  '3개 일치',
  '4개 일치',
  '5개 일치',
  '5개 일치, 보너스 볼 일치',
  '6개 일치',
];

export const outputGreetingStatisticComment = () => {
  Console.print('\n당첨 통계');
  Console.print('---');
};

export const outputStatisticCommnet = (winningCount, prizeStringList) => {
  winningCount.forEach((eachCount, index) =>
    Console.print(
      `${outputMatchingComments[index]} (${prizeStringList[index]}원) - ${eachCount}개`,
    ),
  );
};

export const outputEarningRateCommnet = (earningRate) => {
  Console.print(`총 수익률은 ${earningRate}%입니다.`);
};

export const outputErrorComment = (error, errorStep) => {
  Console.print(
    `${ERROR_PREFIX} ${error.message}\n`.replace(`${errorStep}: `, ''),
  );
};
