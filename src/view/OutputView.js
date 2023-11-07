import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printPurchaseResult(pusrchaseAmount) {
    Console.print(`총 ${pusrchaseAmount}개를 구매했습니다.`);
  },
  printLottoNumbers(lottoNumbers) {
    Console.print(`${lottoNumbers.join(', ')}`);
  },
  printLineBreak() {
    Console.print('');
  },
  printResult(rankResult) {
    Console.print(`
    당첨 통계
    --------------------
    3개 일치 (5,000원) - ${rankResult[4]}개
    4개 일치 (50,000원) - ${rankResult[3]}개
    5개 일치 (1,500,000원) - ${rankResult[2]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankResult[1]}개
    6개 일치 (2,000,000,000원) - ${rankResult[0]}개`);
  },
  printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate}입니다.`);
  },
  printError(error) {
    Console.print(error.message);
    this.printLineBreak();
  },
};

export default OutputView;
