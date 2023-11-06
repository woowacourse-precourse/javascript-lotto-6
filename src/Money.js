import { MissionUtils } from '@woowacourse/mission-utils';

class Money {
  payedMoney;
  lottoCount;
  LOTTO_PRICE = 1000;

  constructor() {
    this.init();
  }
  init = async () => {
    await this.getPayedMoney();
    this.calLottoCount();
  };
  getPayedMoney = async () => {
    this.payedMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
  };
  calLottoCount = () => {
    this.lottoCount = this.payedMoney / this.LOTTO_PRICE;
  };
}
export default Money;
