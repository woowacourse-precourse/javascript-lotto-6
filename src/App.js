import ConvertInputTo from './modules/ConvertInputTo.js';
import Print from './modules/Print.js';
import Get from './modules/Get.js';

class App {
  async play() {
    const lottoArray = await ConvertInputTo.lottoArray();
    Print.purchasedLotto(lottoArray);
    const lottoBoard = await ConvertInputTo.lottoBoard();
    const lottoResult = Get.lottoResult(lottoArray, lottoBoard);
    Print.lottoResult(lottoResult);
    Print.lottoReturnRatio(
      Get.lottoReturnRatio(lottoResult, lottoArray.length)
    );
  }
}

export default App;
