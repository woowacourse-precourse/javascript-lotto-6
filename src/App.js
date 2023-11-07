import Fucntional from './functinoal/Functional.js';
import MVC from './mvc/MVC.js';

import ConvertInputTo from './functinoal/modules/ConvertInputTo.js';
import Print from './functinoal/modules/Print.js';
import Get from './functinoal/modules/Get.js';

class App {
  async play() {
    //await Fucntional.play();

    //await MVC.play();

    const lottoArray = await ConvertInputTo.lottoArray();
    Print.purchasedLotto(lottoArray);
    Print.lineBreak();

    const lottoBoard = await ConvertInputTo.lottoBoard();
    Print.lineBreak();

    const lottoResult = Get.lottoResult(lottoArray, lottoBoard);
    Print.lottoResult(lottoResult);
    Print.lottoReturnRatio(
      Get.lottoReturnRatio(lottoResult, lottoArray.length)
    );
  }
}

export default App;
