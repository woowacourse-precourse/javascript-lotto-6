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
  printLottoPrize(prizeCategories) {
    Console.print("\n당첨 통계\n---");

    for (const [key, prize] of Object.entries(prizeCategories)) {
      const prizeGrade = key.replace(/[^0-9]/g, "");

      if (key === "equal5WithBonus") {
        Console.print(`${prizeGrade}개 일치, 보너스 볼 일치 (${prize.price}원) - ${prize.count}개`);
        continue;
      }
      Console.print(`${prizeGrade}개 일치 (${prize.price}원) - ${prize.count}개`);
    }
  }
}

export default View;
