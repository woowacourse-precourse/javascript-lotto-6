import { MissionUtils } from '@woowacourse/mission-utils';
import Controller from './Controller.js';
import { STAGES, TEXTVIEW } from './Db.js';
import ERROR from './ErrorDb.js';

const controller = Controller.getInstance();
const View = {
  stage1View: async function requestMoneyView() {
    const tmp = await controller.switchStage(STAGES.NUM_1);
    return tmp;
  },

};

class PlayView {
  #now = STAGES.NUM_1;

  #before = STAGES.NUM_1;

  async viewFunction() {
    while (this.#now !== STAGES.EXIT) {
      // eslint-disable-next-line no-await-in-loop
      await this.switchView(this.#now);
    }
  }

  async switchView(stageNum) {
    switch (stageNum) {
      case STAGES.NUM_1:
        this.#before = this.#now;
        this.#now = await View.stage1View();
        break;
      case STAGES.NUM_2:
        break;
      case STAGES.NUM_3:
        break;
      default:
        this.#errorView(stageNum);
        break;
    }
  }

  #errorView(stageNum) {
    switch (stageNum) {
      case ERROR.STAGES.WRONG_AMOUNT_MONEY:
        MissionUtils.Console.print(ERROR.WRONG_AMOUNT_MONEY.message);
        break;
      case ERROR.STAGES.WRONG_INPUT_TYPE:
        MissionUtils.Console.print(ERROR.WRONG_INPUT_TYPE.message);
        break;
      case ERROR.STAGES.INPUT_RANGE:
        MissionUtils.Console.print(ERROR.INPUT_RANGE.message);
        break;
      case ERROR.STAGES.INPUT_SIZE:
        MissionUtils.Console.print(ERROR.INPUT_SIZE);
        break;
      default:
    }
    this.#now = this.#before;
  }
}

export default PlayView;
