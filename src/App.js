import { MissionUtils, Console } from '@woowacourse/mission-utils';

async function getPurchasePrice() {
  const price = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
  const purchasePrice = Number(price);
  return purchasePrice;
}

class App {
  async play() {}
}

export default App;
