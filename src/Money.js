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
    this.noInputError(this.payedMoney);
    this.isNaNError(this.payedMoney);
  };
  noInputError = (input) => {
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }
  };
  isNaNError = (input) => {
    if (!Number.isNaN(input)) {
      throw new Error('[ERROR] 입력값이 숫자가 아닙니다.');
    }
  };
  calLottoCount = async () => {
    this.lottoCount = this.payedMoney / this.LOTTO_PRICE;
  };
  printCalLottoCount = () => {
    MissionUtils.Console.print(`\n${this.lottoCount}개를 구매했습니다.`);
  };
}
export default Money;
