import { Console } from "@woowacourse/mission-utils";

class View {
  async getLottoPurchaseAmount() {
    return await this.readLine("구입금액을 입력해 주세요.\n");
  }

  async getLottoWinningNumbers() {
    return await this.readLine("당첨 번호를 입력해 주세요.\n");
  }

  async getLottoBonusNumber() {
    return await this.readLine("보너스 번호를 입력해 주세요.\n");
  }

  // Lottos : Lotto 인스턴스 배열
  async getLottos(Lottos) {
    Lottos.map((Lotto) => {
      Lotto.print();
    });
  }

  async getLottoResult(당첨결과) {
    Console.print("당첨 통계");
    Console.print(`3개 일치 (5,000원) - ${fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${first}개`);
    Console.print(`총 수익률은 ${수익률}%입니다.`);
  }

  async readLine(query) {
    return await Console.readLineAsync(query);
  }
}
