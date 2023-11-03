import { Console } from "@woowacourse/mission-utils";

class View {
  readLine(message) {
    return Console.readLineAsync(message);
  }

  print(message) {
    Console.print(message);
  }

  printLotto(lotties) {
    Console.print(`\n${lotties.length}개를 구매했습니다.`);

    lotties.forEach((lotto) => {
      Console.print(lotto.lottoNumbers);
    });
  }
}

export default View;
