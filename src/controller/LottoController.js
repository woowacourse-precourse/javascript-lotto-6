import LottoShop from "../domains/LottoShop.js";
import TargetLotto from "../domains/TargetLotto.js";
import User from "../domains/User.js";
import { Console } from "@woowacourse/mission-utils";
import { formatMoney } from "../utils/NumberFormat.js";

class LottoController {
  #lottoShop;
  #targetLotto;
  #user;

  constructor() {
    this.#lottoShop = new LottoShop();
  }

  async start() {
    const userMoneyInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    // TODO 1000원 단위예외 체크

    this.#user = new User(userMoneyInput);

    const lottoPrice = this.#lottoShop.getLottoPrice();
    const maxBuyCount = Math.floor(userMoneyInput / lottoPrice);

    this.#lottoShop.sellLottos(this.#user, maxBuyCount);
    Console.print(`${maxBuyCount}개를 구매했습니다.`);

    const userBuyLottoList = this.#user.getLottoList();

    userBuyLottoList.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(", ")}]`)
    );

    Console.print("");

    const targetLottoInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    // TODO 예외체크
    Console.print("");

    const targetNumberList = targetLottoInput.split(",").map(Number);

    const targetBonusInput = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요\n"
    );
    Console.print("");

    this.#targetLotto = new TargetLotto(
      targetNumberList,
      Number(targetBonusInput)
    );

    Console.print("당첨 통계\n---");

    const lottoWinningCounts = [0, 0, 0, 0, 0];

    // 상수 분리
    const awardInfo = {
      1: {
        money: 2000000000,
        message: "6개 일치",
      },
      2: {
        money: 30000000,
        message: "5개 일치, 보너스 볼 일치",
      },
      3: {
        money: 1500000,
        message: "5개 일치",
      },
      4: {
        money: 50000,
        message: "4개 일치",
      },
      5: {
        money: 5000,
        message: "3개 일치",
      },
    };
    let totalWinningMoney = 0;

    userBuyLottoList.forEach((lotto) => {
      const lottoResult = this.#targetLotto.calLottoResult(lotto);
      if (lottoResult !== 0) {
        lottoWinningCounts[lottoResult - 1]++;
        totalWinningMoney += awardInfo[lottoResult].money;
      }
    });

    Object.keys(awardInfo)
      .map(Number)
      .sort((a, b) => b - a)
      .forEach((rank) => {
        const count = lottoWinningCounts[rank - 1];

        Console.print(
          `${awardInfo[rank].message} (${formatMoney(
            awardInfo[rank].money
          )}원) - ${count}개`
        );
      });

    Console.print(
      `총 수익률은 ${((totalWinningMoney / userMoneyInput) * 100).toFixed(
        1
      )}%입니다.`
    );
  }
}

export default LottoController;
