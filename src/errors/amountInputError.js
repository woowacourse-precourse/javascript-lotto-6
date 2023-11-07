import { Console } from "@woowacourse/mission-utils";
const amountInputError = (amount) => {
  if (/[^0-9]/.test(amount)) {
    Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
};

export default amountInputError;
