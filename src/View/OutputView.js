import { Console } from '@woowacourse/mission-utils';
import { LOTTO, WINNING_MONEY } from '../Constant/Constants';

const OutputView = {
  // 구매 복권 번호 출력
  async outLottoNum(numArr) {
    console.log(numArr);
  },
  // 게임 진행 출력
  async outputBoard(countArr) {
    Console.print(LOTTO.OUTPUT_RESULT);
    Console.print(`3개 일치 (${WINNING_MONEY.FIFTH}) - ${countArr[0]}개`);
    Console.print(`4개 일치 (${WINNING_MONEY.FOURTH}) - ${countArr[1]}개`);
    Console.print(`5개 일치 (${WINNING_MONEY.THIRD}) - ${countArr[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (${WINNING_MONEY.SECOND}) - ${countArr[3]}개`);
    Console.print(`6개 일치 (${WINNING_MONEY.FIRST}) - ${countArr[4]}개`);
  },
  // 우승자 출력
  async outPrize(prize) {
    Console.print(`총 수익률은 ${prize}입니다.`);
  },
};

export default OutputView;
