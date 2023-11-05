import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";

export default class OutputView {
  printLottoCount(lottocount) {
    Console.print(`${lottocount}${GUIDE_MESSAGE.totalTickets}`);
  }
}