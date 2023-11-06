import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printError(errorMessage) {
    Console.print(`${errorMessage}`);
  },

  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  },

  printLotto(lottoTicket) {
    lottoTicket.forEach((lotto) => {
      Console.print(lotto);
    });
  },

  printLottoResult(lottoResult) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${lottoResult[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult[1]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult[0]}개`);
  },
};

export default OutputView;
