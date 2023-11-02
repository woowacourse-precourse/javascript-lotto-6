import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
class App {
  async play() {
    const totalPrice = await getTotalPrice();
    const totalCount = parseInt(totalPrice / 1000);
    Console.print(`${totalCount}개를 구매했습니다.`);
  }
}

const getTotalPrice = async () => {
  const totalPrice = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  validateTotalPrice(totalPrice);
  return totalPrice;
};

const validateTotalPrice = (price) => {
  if (price % 1000) {
    throw new Error("[ERROR] 구입 금액이 1,000원 단위가 아닙니다.");
  }
  if (Number.isNaN(price)) {
    throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
  }
};

export default App;
