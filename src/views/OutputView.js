import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printLottos(totalCount, lottos) {
    Console.print(`${totalCount}개를 구매했습니다.`);
    for (let lotto of lottos) {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    }
  }

  printResult(totalPrice, income, result) {
    Console.print(`3개 일치 (5,000원) - ${result[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result[1]}개`);
    Console.print(
      `총 수익률은 ${((income / totalPrice) * 100).toLocaleString("ko-KR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })}%입니다.`
    );
  }
}

export default OutputView;
