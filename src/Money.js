import { MissionUtils } from '@woowacourse/mission-utils';

class Money {
  payedMoney;
  lottoCount;
  LOTTO_PRICE = 1000;

  init = async () => {
    await this.getPayedMoney();
    this.calLottoCount();
    this.printCalLottoCount();
  };
  getPayedMoney = async () => {
    this.payedMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
  };
  calLottoCount = async() => {
    this.lottoCount = this.payedMoney / this.LOTTO_PRICE;
  };
  printCalLottoCount = () => {
    MissionUtils.Console.print(`\n${this.lottoCount}개를 구매했습니다.`);
  };
}
export default Money;
