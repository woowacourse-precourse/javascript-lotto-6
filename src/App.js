import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const payAmount = await Console.readLineAsync('구입금액을 입력해주세요\n');

    const purchaseQuantity = payAmount / 1000;

    const lottoNumbers = Array.from({ length: purchaseQuantity }, () => {
      const random = Random.pickUniqueNumbersInRange(1, 45, 6);
      return random.sort((a, b) => a - b);
    });
  }
}

export default App;
