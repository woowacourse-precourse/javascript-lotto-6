import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
class App {
  async play() {
    const totalPrice = await getTotalPrice();

    const totalCount = parseInt(totalPrice / 1000);
    Console.print(`${totalCount}개를 구매했습니다.`);

    const lottos = getLottos(totalCount);
    printLottos(lottos);

    const targetNumbers = getTargetNumbers();
    const bonusNumber = getBonusNumber();
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

const getTargetNumbers = async () => {
  const targetNumbers = await Console.readLineAsync(
    "당첨 번호를 입력해 주세요.\n"
  );
  validateTargetNumbers(targetNumbers);
  return targetNumbers;
};

const validateTargetNumbers = (numbers) => {
  const numbers = numbers.split(",");
  const numbersSet = Set(numbers);
  if (numbers.length != 6) {
    throw new Error("[ERROR] 당첨 번호는 6자리입니다.");
  }
  if (numbers.length != numbersSet.length) {
    throw new Error("[ERROR] 당첨 번호는 중복된 숫자가 있을 수 없습니다.");
  }
};

const getBonusNumber = async () => {
  const bonusNumber = await Console.readLineAsync(
    "보너스 번호를 입력해 주세요.\n"
  );
  validateBonusNumbers(bonusNumber);
  return bonusNumber;
};

const validateBonusNumbers = (number) => {
  if (Number.isNaN(number)) {
    throw new Error("[ERROR] 당첨 번호는 6자리입니다.");
  }
};

export default App;
