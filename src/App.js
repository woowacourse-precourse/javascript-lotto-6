import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
class App {
  async play() {
    const totalPrice = await getTotalPrice();

    const totalCount = parseInt(totalPrice / 1000);
    Console.print(`${totalCount}개를 구매했습니다.`);

    const lottos = getLottos(totalCount);
    printLottos(lottos);
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

const getLottos = (counts) => {
  const lottos = [];
  for (let count = 0; count < counts; count++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    const lotto = new Lotto(numbers);
    lottos.push(lotto);
  }
  return lottos;
};

const printLottos = (lottos) => {
  for (let lotto of lottos) {
    const numbers = lotto.getNumbers();
    Console.print(numbers);
  }
};

export default App;
