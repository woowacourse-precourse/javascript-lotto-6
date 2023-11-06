import { MissionUtils } from '@woowacourse/mission-utils';

export default class PurchaseController {
  lottos = [];

  issueLottos(amount) {
    for (let i = 0; i < amount / 1000; i++) {
      const lotto = this.issueOneLotto();
      this.lottos.push(lotto);
    }
  }

  issueOneLotto() {
    let lotto = [];
    for (let j = 0; j < 6; j++) {
      lotto.push(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    return lotto;
  }
}
