import ConvertInputTo from './modules/ConvertInputTo.js';
import Get from './modules/Get.js';
import Print from './modules/Print.js';

class Fucntional {
  static async play() {
    const lottoArray = await ConvertInputTo.lottoArray();
    Print.lineBreak();
    Print.purchasedLotto(lottoArray);
    Print.lineBreak();

    const lottoBoard = await ConvertInputTo.lottoBoard();
    Print.lineBreak();

    const lottoResult = Get.lottoResult(lottoArray, lottoBoard);
    Print.lottoResult(lottoResult);
    Print.returnRatio(Get.lottoReturnRatio(lottoResult, lottoArray.length));
  }
}

export default Fucntional;
