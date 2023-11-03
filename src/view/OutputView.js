import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../static/Message.js";

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(`${amount}${MESSAGE.purchaseAmount}`);
  },

  // 도메인 생성 후 작업 에정
  printLottos(lottos) {},

  printRevenueResult(revenue) {
    Console.print(`${MESSAGE.revenuePrefix}${revenue}${MESSAGE.revenueSuffix}`);
  },

  // 도메인 생성 후 작업 에정
  printResultStatic() {},
};

export default OutputView;
