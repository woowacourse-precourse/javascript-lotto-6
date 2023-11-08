import LottoController from './controller/lottoController.js';
import LottoModel from './model/LottoModel.js';
import LottoInputView from './view/LottoInputView.js';
import LottoOutputView from './view/LottoOutputView.js';

class MVC {
  static async play() {
    const MODEL = new LottoModel();
    const INPUT_VIEW = new LottoInputView();
    const OUTPUT_VIEW = new LottoOutputView();
    const CONTROLLER = new LottoController(MODEL, INPUT_VIEW, OUTPUT_VIEW);

    await CONTROLLER.play();
  }
}

export default MVC;
