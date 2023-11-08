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

const analyzeProfitRate = (lottoPurchaseAmount, lottoResult) => {
  const prizeLists = Object.values(CONSTANTS.prize);
  const countLists = Object.values(lottoResult);
  const totalInvestment = lottoPurchaseAmount * 1000;

  const totalPrize = prizeLists.reduce((total, prize, index) => {
    const count = countLists[index];
    return total + prize * count;
  }, 0);

  const profitRate = ((totalPrize / totalInvestment) * 100).toFixed(1);
  return profitRate;
};

const createProfitString = profitRate => {
  const profitRateString = `\n${USER_OUTPUT.totalProfitRatePrefix}${profitRate}${USER_OUTPUT.totalProfitRateSuffix}`;
  return profitRateString;
};

const printLottoTotalResult = (lottoResult, profitRate) => {
  const lottoResultString = createLottoResultString(lottoResult);
  const profitRateString = createProfitString(profitRate);

  Console.print(lottoResultString + profitRateString);
};

export {
  printLottoTickets,
  analyzeProfitRate,
  createLottoResultString,
  createProfitString,
  printLottoTotalResult,
};
