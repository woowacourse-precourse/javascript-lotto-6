import { OutputView } from "../views/OutputView.js";

export const Validator = {
  checkMoney(price) {
    const strPrice = String(price);
    if (!/^[0-9]+$/g.test(strPrice) || price % 1000 !== 0) {
      OutputView.err('[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.');
      return false;
    }
    return true;
  },
  checkSixNumber(numbers) {
    if (numbers.length !== 6) {
      OutputView.err('[ERROR] 당첨 번호는 중복되지 않는 숫자 6개를 입력해야 합니다.');
      return false;
    }
    return true;
  },
  checkIsNumber(number) {
    const strNumber = String(number);
    if (!/^([1-9]|[1-3][0-9]|4[0-5])$/.test(strNumber)) {
      OutputView.err('[ERROR] 보너스 번호는 1 ~ 45사이의 숫자 1개를 입력해야 합니다.')
      return false;
    }
    return true;
  },
}