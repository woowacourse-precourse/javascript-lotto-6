import { OutputView } from "../views/OutputView.js";

export const Validator = {
  checkMoney(price) {
    const strPrice = String(price)
    if (!/^[0-9]+$/g.test(strPrice) || price % 1000 !== 0) {
      OutputView.err('[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.');
      return false;
    }
    return true;
  },
}