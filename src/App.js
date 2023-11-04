import ConvertInputTo from './modules/ConvertInputTo.js';
import Print from './modules/Print.js';
import Get from './modules/Get.js';

class App {
  async play() {
    const lottoArray = await ConvertInputTo.lottoArray();
    Print.purchasedLotto(lottoArray);
    const lottoBoard = await ConvertInputTo.lottoBoard();
    Print.lottoResult(Get.lottoResult(lottoArray, lottoBoard));
  }
}

export default App;
