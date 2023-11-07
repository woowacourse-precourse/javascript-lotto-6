import { Console } from '@woowacourse/mission-utils';
import { USER_OUTPUT } from '../constants/Logs';
import CONSTANTS from '../constants/Constants';

const printLottoTickets = lottoTickets => {
  const lottoPurchaseStatus = `${lottoTickets.length}${USER_OUTPUT.purchaseCountPrompt}`;
  const ticketLines = lottoTickets
    .map(ticket => `[${ticket.join(', ')}]`)
    .join('\n');
  Console.print(`\n${lottoPurchaseStatus}\n${ticketLines}`);
};

const createLottoResultString = lottoResult => {
  const outputKeys = ['fifth', 'forth', 'third', 'second', 'first'];
  const outputLists = outputKeys.map(
    key => `${USER_OUTPUT[key.concat('Prize')]}${lottoResult[key]}개`,
  );

  const resultString = `${USER_OUTPUT.winningStatistics}${outputLists.join(
    '\n',
  )}`;

  return resultString;
};
