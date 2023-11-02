import ConvertInputTo from './modules/ConvertInputTo.js';
import Get from './modules/Get.js';

const LOTTO_PRICE = 1000;
class App {
  async play() {
    await ConvertInputTo.purchasePrice().then(purchasePrice =>
      Get.lottoArray(purchasePrice / LOTTO_PRICE)
    );
  }
}

export default App;
