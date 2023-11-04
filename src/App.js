import { Console } from '@woowacourse/mission-utils';

async function getPurchaseAmount() {
  const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.');
  return purchaseAmount;
}

class App {
  async play() {}
}

export default App;
