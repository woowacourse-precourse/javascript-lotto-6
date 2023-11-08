import { Console } from "@woowacourse/mission-utils";
const amountInputError = (amount) => {
  if (/[^0-9]/.test(amount)) {
    Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (amount % 1000 !== 0) {
    Console.print("[ERROR] 1000원 단위로 입력해주세요.");
    throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
  }
};

export default amountInputError;
