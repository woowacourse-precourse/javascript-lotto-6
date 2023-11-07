import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printAllLottos(lottoList) {
    Console.print(`\n${lottoList.length}개를 구매했습니다.`);
    lottoList.forEach((lottoList) => {
      Console.print(lottoList.getNumber());
    });
  }
}
export default OutputView;
