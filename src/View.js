import { MissionUtils } from '@woowacourse/mission-utils';
import Controller from './Controller.js';
import { STAGES, TEXTVIEW } from './Db.js';

const View = {
  stage1View: function requestMoneyView() {
    const controller = Controller.getInstance();
    return controller.switchStage(STAGES.NUM_1);
  },

};

class PlayView {
  async viewFunction() {
    let now = STAGES.NUM_1;
    while (now !== STAGES.EXIT) {
      // eslint-disable-next-line no-await-in-loop
      now = await this.switchView(now);
    }
  }

  async switchView(stageNum) {
    switch (stageNum) {
      case STAGES.NUM_1:
        this.now = await View.stage1View();
        console.log('test');
        break;
      case STAGES.NUM_2:
        break;
      case STAGES.NUM_3:
        break;
      default:
    }
  }
}

export default PlayView;
