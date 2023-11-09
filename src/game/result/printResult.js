import { Print } from '../../interface/Output.js';
import { separator } from '../../utils/separator.js';

export const printResult = {
  title() {
    Print('\n당첨통계\n---');
  },
  winningLottoWithBonus(winningNumbersCount, prize, count) {
    Print(`${winningNumbersCount}개 일치, 보너스 볼 일치 (${separator(prize)}원) - ${count}개`);
  },

  winningLotto(winningNumbersCount, prize, count) {
    Print(`${winningNumbersCount}개 일치 (${separator(prize)}원) - ${count}개`);
  },

  totalProfitRate(totalProfitRate) {
    Print(`총 수익률은 ${totalProfitRate}%입니다.`);
  },
};
