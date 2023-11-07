import { MissionUtils } from '@woowacourse/mission-utils';
import { STAGES, TEXTVIEW } from './Db.js';
import ERROR from './ErrorDb.js';
import View from './View.js';

const errorController = {
  moneyError: (value) => {
    if (!/^\d+$/.test(value)) {
      throw ERROR.WRONG_INPUT_TYPE;
    }
    const numericValue = parseInt(value, 10);
    if (numericValue <= 0 || numericValue % 1000 !== 0) {
      throw ERROR.WRONG_AMOUNT_MONEY;
    }
  },
};

const stageController = {
  stage1Controller: async function MoneyAmountInput() {
    const money = await MissionUtils.Console.readLineAsync(TEXTVIEW.REQUEST_MONEYINPUT);
    errorController.moneyError(money);
  },
  stage2Controller: function ShowLottoList() {
  },
};

class Controller {
  static getInstance() {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }

  constructor() {
    Controller.instance = this;
    Object.freeze(Controller.instance);
  }

  async switchStage(stageNum) {
    switch (stageNum) {
      case STAGES.NUM_1:
        try {
          await stageController.stage1Controller();
        } catch (e) {
          return STAGES.NUM_1;
        }
        return STAGES.NUM_2;
      case STAGES.NUM_2:
        break;
      case STAGES.NUM_3:
        break;
      default:
    }
    return 0;
  }
}

export default Controller;
