import { Console } from '@woowacourse/mission-utils';

class View {
  static async inputAmountOfMoney() {
    const inputAmount = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    return inputAmount;
  }

  static async inputSixWinningNumbers() {
    const numbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return numbers;
  }

  static async inputBonusNumber() {
    const numbers = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    return numbers;
  }

  static async outputUserLottosList(list, count) {
    Console.print(`\n${count}개를 구매했습니다.`);
    list.forEach((lottos) => {
      Console.print(lottos.sort((a, b) => a - b));
    });
  }

  static async outputComputeResult(resultObject) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${resultObject.rank5.count}개`);
    Console.print(`4개 일치 (50,000원) - ${resultObject.rank4.count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${resultObject.rank3.count}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultObject.rank2.count}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${resultObject.rank1.count}개`);
  }
}

export default View;
