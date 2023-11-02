import { MissionUtils } from '@woowacourse/mission-utils';

const print = (printString = '') => {
  MissionUtils.Console.print(printString);
};

const printInputPurchaseAmountPhrase = () => {
  const INPUT_PURCHASE_AMOUNT_PHRASE = '구입금액을 입력해 주세요.';
  print(INPUT_PURCHASE_AMOUNT_PHRASE);
};

const printNPurchasePhrase = (n) => {
  const PURCHASE_PHRASE = '개를 구매헀습니다.';
  const nPurchasePhrase = `${n}${PURCHASE_PHRASE}`;
  print(nPurchasePhrase);
};

const printLottoNumbers = (lottos) => {
  lottos.forEach((lotto) => {
    print(lotto);
  });
};

const printInputWinnigNumbersPhrase = () => {
  const INPUT_WINNING_NUMBER_PHRASE = '당첨 번호를 입력해 주세요.';
  print(INPUT_WINNING_NUMBER_PHRASE);
};

const printInputBonusNumberPhrase = () => {
  const INPUT_BONUS_NUMBER_PHRASE = '보너스 번호를 입력해 주세요.';
  print(INPUT_BONUS_NUMBER_PHRASE);
};

const formatCurrency = (money) => {
  return `${money.toLocaleString('en-US')}원`;
};

const getNMatchPhrase = ({ matchString, money, count }) => {
  return `${matchString} (${formatCurrency(money)}) - ${count}개`;
};

const printWinningStatistics = (matchResults) => {
  const WINNING_STATISTICS_PHRASE = '당첨 통계';
  const CONTOUR = '---';

  print(WINNING_STATISTICS_PHRASE);
  print(CONTOUR);
  matchResults.forEach((result) => {
    print(getNMatchPhrase(result));
  });
};

const printTotalReturn = (totalReturn) => {
  print(`총 수익률은 ${totalReturn}%입니다.`);
};

const printErrorMessage = (errorMessage) => {
  print(`[ERROR] ${errorMessage}`);
};

export {
  printInputPurchaseAmountPhrase,
  printNPurchasePhrase,
  printLottoNumbers,
  printInputWinnigNumbersPhrase,
  printInputBonusNumberPhrase,
  printWinningStatistics,
  printTotalReturn,
  printErrorMessage,
};
