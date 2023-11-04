import { Console } from '@woowacourse/mission-utils';

const outputView = {
  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  },

  printLottoNumbers(randomNumber) {
    Console.print(`[${randomNumber.join(', ')}]`);
  },

  printLottoResult(lottoResult, rate) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${lottoResult.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult.first}개`);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  },
};

export default outputView;
