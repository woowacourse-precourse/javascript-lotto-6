import { MissionUtils } from "@woowacourse/mission-utils";

class PublishView {
  static printLottoQuantity(quantity) {
    const message = `${quantity}개를 구매했습니다.`;

    MissionUtils.Console.print(message);
  }
}

export default PublishView;
